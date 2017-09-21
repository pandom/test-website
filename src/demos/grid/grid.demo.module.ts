/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';

import {GridAutoLayout1Demo} from "./grid-auto-layout-1";
import {GridAutoLayout2Demo} from "./grid-auto-layout-2";
import {GridColumnsDemo} from "./grid-columns";
import {GridColumnStackingDemo} from "./grid-column-stacking";
import {GridColumnOffsettingDemo} from "./grid-column-offsetting";
import {GridColumnPushDemo} from "./grid-column-push";
import {GridColumnPullDemo} from "./grid-column-pull";
import {GridItemsHorizontalAlignmentDemo} from "./grid-items-horizontal-alignment";
import {GridItemsIndividualVerticalAlignmentDemo} from "./grid-items-individual-vertical-alignment";
import {GridItemsVerticalAlignmentDemo} from "./grid-items-vertical-alignment";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        GridAutoLayout1Demo,
        GridAutoLayout2Demo,
        GridColumnsDemo,
        GridColumnStackingDemo,
        GridColumnOffsettingDemo,
        GridColumnPushDemo,
        GridColumnPullDemo,
        GridItemsHorizontalAlignmentDemo,
        GridItemsIndividualVerticalAlignmentDemo,
        GridItemsVerticalAlignmentDemo
    ],
    exports: [
        GridAutoLayout1Demo,
        GridAutoLayout2Demo,
        GridColumnsDemo,
        GridColumnStackingDemo,
        GridColumnOffsettingDemo,
        GridColumnPushDemo,
        GridColumnPullDemo,
        GridItemsHorizontalAlignmentDemo,
        GridItemsIndividualVerticalAlignmentDemo,
        GridItemsVerticalAlignmentDemo
    ]
})
export default class GridDemoModule {
}
