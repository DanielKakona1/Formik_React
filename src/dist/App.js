"use strict";
exports.__esModule = true;
var react_1 = require("react");
var formik_1 = require("formik");
var yup = require("yup");
var core_1 = require("@material-ui/core");
require("./App.css");
var validationSchema = yup.object({
    firstName: yup.string().required().max(10)
});
var App = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(formik_1.Formik, { initialValues: { firstName: '', lastName: '' }, validateOnChange: true, validationSchema: validationSchema, onSubmit: function (data, _a) {
                var setSubmitting = _a.setSubmitting, resetForm = _a.resetForm;
                setSubmitting(true);
                // make async call
                console.log(data);
                setSubmitting(false);
                resetForm();
            } }, function (_a) {
            var values = _a.values, errors = _a.errors, isSubmitting = _a.isSubmitting;
            return (react_1["default"].createElement(formik_1.Form, null,
                react_1["default"].createElement(formik_1.Field, { placeholder: 'first name', name: 'firstName', type: 'input', as: core_1.TextField }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { color: 'red' }, errors.firstName)),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(formik_1.Field, { placeholder: 'last name', name: 'lastName', type: 'input', as: core_1.TextField })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(core_1.Button, { disabled: isSubmitting, type: 'submit' }, "Submit")),
                react_1["default"].createElement("pre", null, JSON.stringify(values, null, 2))));
        })));
};
exports["default"] = App;
