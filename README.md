# Webix Companion
A set of Javascript classes allowing implementation of [Webix](https://webix.com) views in an object oriented way.
The companion does not implement all features of Webix. Instead, a base set of features was added
to satisfy implementation in other projects. The library will be updated as needed when additional
functionality is needed.

## Setup
You will notice the html pages in the demo directories have references to the Webix library. However, the library
is not included in this repository. You can download the standard GPL licensed version of
the library from [here](https://webix.com/get-webix-gpl/).

## JSDOC
To create documentation execute the following command:
```bash
jsdoc -c jsdoc-config.json -R jsdoc.md -r src/main/js/modules/webix/
```
