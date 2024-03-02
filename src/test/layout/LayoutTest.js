import assert from "node:assert";
import {Layout} from "../../main/js/modules/webix/layout/Layout.js";

describe('Layout Test', function () {
    let layout = new Layout();
    describe('#Test addRows', function () {
        it('The object should have three rows', function () {
            let testObj = new Layout();
            testObj.addRows(3);
            assert.equal(testObj.rows.length, 3);
        });
    });

    describe('#Test addColumns', function () {
        it('The object should have three columns', function () {
            let testObj = new Layout();
            testObj.addColumns(3);
            assert.equal(testObj.cols.length, 3);
        });
    });

    describe('#Test addRows & addColumns', function () {
        it('The object should have three rows and three columns', function () {
            let testObj = new Layout();
            testObj.addRows(3);
            testObj.setObjectAtIndex((new Layout()).addColumns(3), 1);
            assert.equal(testObj.hasOwnProperty("rows"), true);
            assert.equal(testObj.hasOwnProperty("cols"), false);
            assert.equal(testObj.rows[1].hasOwnProperty("cols"), true);
        });
    });

    describe('#Test createGridLayout', function () {
        it('The object should have three rows with two columns in each row', function () {
            let testObj = (new Layout()).createGridLayout(3, 2);
            assert.equal(testObj.hasOwnProperty("rows"), true);
            assert.equal(testObj.hasOwnProperty("cols"), false);
            assert.equal(testObj.rows[0].hasOwnProperty("cols"), true);
            assert.equal(testObj.rows[0].cols.length === 2, true);
            assert.equal(testObj.rows[1].cols.length === 2, true);
            assert.equal(testObj.rows[2].cols.length === 2, true);
        });
    });
});