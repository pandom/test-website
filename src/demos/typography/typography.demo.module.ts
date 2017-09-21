/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';

import {TypographyFontWeightDemo} from "./typography-font-weight";
import {TypographyHeadersDemo} from "./typography-headers";
import {TypographyTextDemo} from "./typography-text";
import {TypographyLinksDemo} from "./typography-links";
import {TypographyFontCharTestDemo} from "./typography-font-char-test";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        TypographyFontWeightDemo,
        TypographyHeadersDemo,
        TypographyTextDemo,
        TypographyLinksDemo,
        TypographyFontCharTestDemo
    ],
    exports: [
        TypographyFontWeightDemo,
        TypographyHeadersDemo,
        TypographyTextDemo,
        TypographyLinksDemo,
        TypographyFontCharTestDemo
    ]
})
export default class TypographyDemoModule {
}
