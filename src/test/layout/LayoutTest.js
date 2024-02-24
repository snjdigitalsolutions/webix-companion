import assert from "node:assert";
import {Layout} from "../../main/js/modules/webix/layout/Layout.js";


describe('Layout Test', function () {
    let layout = new Layout();
    describe('#Test addRows', function () {
        it('The object should have three rows', function () {
            let testObj = {};
            layout.addRows(testObj,3);
            assert.equal(testObj.rows.length, 3);
        });
    });

    describe('#Test addColumns', function () {
        it('The object should have three columns', function () {
            let testObj = {};
            layout.addColumns(testObj,3);
            assert.equal(testObj.cols.length, 3);
        });
    });

    describe('#Test addColumns & addRows', function () {
        it('The object should have three columns and three rows', function () {
            let testObj = {};
            layout.addColumns(testObj,3);
            layout.addRows(testObj.cols[1], 3);
            assert.equal(testObj.hasOwnProperty("cols"), true);
            assert.equal(testObj.hasOwnProperty("rows"), false)
            assert.equal(testObj.cols[1].hasOwnProperty("rows"), true);
        });
    });
});