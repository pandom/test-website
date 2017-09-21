/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';
import {FormsModule}   from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import {FormFieldsDemo} from "./form-fields";
import {FormTestDemo} from "./form-test";
import {FormValidationDemo} from "./form-validation";
import {FormCompactDemo} from "./form-compact";
import {FormGridDemo} from "./form-grid";

import {TemplateDrivenFormsDemo} from "./template-driven-forms/template-driven-forms";
import {ReactiveFormsDemo} from "./reactive-forms/reactive-forms";

import {Example} from "./utils/example";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormCompactDemo,
        TemplateDrivenFormsDemo,
        ReactiveFormsDemo,
        Example
    ],
    exports: [
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormCompactDemo,
        TemplateDrivenFormsDemo,
        ReactiveFormsDemo
    ]
})
export default class FormsDemoModule {
}
