'use strict';
const path = require( 'path' );
const fs = require( 'fs' );
const inquirer = require( 'inquirer' );
const stringTemplate = require( 'string-template' );

/**
 * @class
 * @name Generator
 * @description It can generate an initial component skeleton chose between three kind of them
 * @param {Object} options - Default property about the component
 */
class Generator {
    constructor( options ) {
        this.options = options;
        let _templateName = this.options.templateName.toLowerCase();
        let _templateAbsolutePath = path.join( __dirname, this.options.customTemplatesUrl, '/' + _templateName );
        let _files = this.getTemplatesFiles( _templateAbsolutePath, [] );
        this.options.newComponent = true;

        this.options = Object.assign( this.options, {
            templateAbsolutePath: _templateAbsolutePath,
            files: _files
        } );
    }

    /**
     * @name getFiles
     * @description It retrive files inside folder recursively. You can provide it some additional files into array
     * @param {String} _dir - path folder
     * @param {Array} _files - Additional Array files name
     */
    getTemplatesFiles( _dir, _files ) {
        _files = _files || [];
        if ( _dir !== undefined && fs.existsSync( _dir.toLowerCase() ) ) {
            try {
                let files = fs.readdirSync( _dir );
                for ( let i = 0; i < files.length; i++ ) {
                    let name = _dir + '/' + files[ i ];
                    if ( fs.statSync( name ).isDirectory() ) {
                        this.getTemplatesFiles( name, _files );
                    } else {
                        _files.push( name );
                    }
                }
                if ( _files.length === 0 ) {
                    throw new Error( 'No files found in custom templates url ' + _dir );
                }
            } catch ( _error ) {
                console.log( '\x1b[31m%s\x1b[0m: ', 'Created: ' + _error.message );
                process.exit( 0 );
            }
        }
        return _files;
    }

    /**
     * @name generateTemplate
     * @description It makes a simple list form which you have to choose the type of the component
     */
    generateTemplate() {
        let callback = ( answers ) => {
            try {
                if ( typeof answers.componentType === 'string' ) {
                    this.options.componentType = answers.componentType.toLowerCase() + 's';
                    return this.askNameComponent();
                }
                throw new Error( 'Component not chosen. System error!' );
            } catch ( _error ) {
                console.log( '\x1b[31m%s\x1b[0m: ', 'Created: ' + _error.message );
                process.exit( 0 );
            }
        };
        inquirer.prompt( {
            type: 'list',
            message: 'Choose component type',
            name: 'componentType',
            choices: [ new inquirer.Separator(), 'Layout', 'View', 'Widget', new inquirer.Separator() ]
        }, callback );
    }

    /**
     * @name askNameComponent
     * @description It makes a simple input form where you have to put the name of the component
     */
    askNameComponent() {
        let callback = ( answers ) => {
            try {
                if ( typeof answers.componentName === 'string' ) {
                    this.options.componentName = answers.componentName.toLowerCase();
                    return this.makeTemplatesFiles();
                }
                throw new Error( 'Component name empty or system error!' );
            } catch ( _error ) {
                console.log( '\x1b[31m%s\x1b[0m: ', 'Created: ' + _error.message );
                process.exit( 0 );
            }
        };
        inquirer.prompt( {
            type: 'input',
            message: 'Put the component name',
            name: 'componentName',
        }, callback );
    }

    /**
     * @name makeTemplatesFiles
     * @description the most important method which creates the component's folder and the component's files
     */
    makeTemplatesFiles() {
        for ( let i = 0; i < this.options.files.length; i++ ) {
            let absoluteTemplatePath = path.resolve( this.options.files[ i ] );
            let dest = this.options.componentType + '/';
            if ( this.options.dest ) {
                dest = this.options.dest + '/' + dest;
            }
            let callback = ( err, data ) => {
                try {
                    if ( err ) {
                        throw err;
                    }
                    let templateFilepath = absoluteTemplatePath.replace( /^.*[\\\/]/, '' );
                    templateFilepath = templateFilepath.replace( '.template', '.js' );
                    let templatePathWithoutFileName = templateFilepath.substring( 0, templateFilepath.lastIndexOf( '/' ) );
                    let fileData = {
                        destinationFilePath: dest + this.options.componentName + '/' + templateFilepath,
                        destinationFolderPath: dest + templatePathWithoutFileName + '/' + this.options.componentName,
                        fileContent: data
                    };
                    return this.makeComponentFolder( fileData );
                } catch ( _error ) {
                    console.log( '\x1b[31m%s\x1b[0m: ', 'Created: ' + _error.message );
                    process.exit( 0 );
                }
            };
            fs.readFile( absoluteTemplatePath, 'utf8', callback );
        }
        return true;
    }

    /**
     * @name makeComponentFolder
     * @description It makes the component folder on file system
     * @param {object} _fileData - It contains folder paths properties
     */
    makeComponentFolder( _fileData ) {
        if ( !fs.existsSync( _fileData.destinationFolderPath ) ) {
            fs.mkdirSync( _fileData.destinationFolderPath );
            this.options.newComponent = false;
        } else if ( this.options.newComponent ) {
            throw new Error( 'Component name already exist! Be sure to give a new name component.' );
        }
        return this.makePlaceholderReplacing( _fileData );
    }

    /**
     * @name makePlaceholderReplacing
     * @description It replaces placeholder marker with component data and write a content into the specific file
     * @param {object} _fileData - It contains component data
     */
    makePlaceholderReplacing( _fileData ) {
        let injectedData = {
            name: this.options.componentName,
            Name: this.capitalizeFirstLetter( this.options.componentName ),
            NAME: this.options.componentName.toUpperCase(),
        };
        this.options.data = Object.assign( this.options.data, injectedData );
        let formattedData = stringTemplate( _fileData.fileContent, this.options.data );
        let callback = ( err ) => {
            try {
                if ( err ) {
                    throw err;
                }
                console.log( '\x1b[32m%s\x1b[0m: ', 'Created: ' + _fileData.destinationFilePath );
            } catch ( _error ) {
                console.log( '\x1b[31m%s\x1b[0m: ', 'Created: ' + _error.message );
                process.exit( 0 );
            }
        };
        fs.writeFile( _fileData.destinationFilePath, formattedData, callback );
    }

    /**
     * @name toCamelCase
     * @description It retrive a formatted camel-case string about given string
     * @param {String} _str - the string
     */
    toCamelCase( _str ) {
        return _str.split( ' ' ).map( ( word, index ) => {
            if ( index === 0 ) {
                return word.toLowerCase();
            }
            return this.capitalizeFirstLetter( word );
        } ).join( '' );
    }

    /**
     * @name toCamelCase
     * @description It makes the first letter of a string uppercase
     * @param {String} _str - the string
     */
    capitalizeFirstLetter( _str ) {
        return _str.charAt( 0 ).toUpperCase() + _str.slice( 1 ).toLowerCase();
    }

    /**
     * @name toString
     * @description returns a string representing the options object.
     */
    toString() {
        return JSON.stringify( this.options );
    }
}

let options = {
    customTemplatesUrl: './templates',
    dest: './src/app/components',
    templateName: 'component',
    data: {}
};

let g = new Generator( options );
g.generateTemplate();
