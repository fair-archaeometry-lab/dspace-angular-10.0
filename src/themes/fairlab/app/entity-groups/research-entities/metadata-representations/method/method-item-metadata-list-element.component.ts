import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DSONameService } from '@dspace/core/breadcrumbs/dso-name.service';
import { MetadataRepresentationType } from '@dspace/core/shared/metadata-representation/metadata-representation.model';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import { metadataRepresentationComponent } from '../../../../../../../app/shared/metadata-representation/metadata-representation.decorator';
import { ItemMetadataRepresentationListElementComponent } from '../../../../../../../app/shared/object-list/metadata-representation-list-element/item/item-metadata-representation-list-element.component';
import { TruncatableComponent } from '../../../../../../../app/shared/truncatable/truncatable.component';

/**
 * Displays a StandardMethod Item when it is used as a metadata value,
 * such as a selected StandardMethod in a Service relation field.
 */
@metadataRepresentationComponent(
    'StandardMethod',
    MetadataRepresentationType.Item,
)
@Component({
    selector: 'ds-method-item-metadata-list-element',
    templateUrl: './method-item-metadata-list-element.component.html',
    imports: [
        NgbTooltip,
        RouterLink,
        TruncatableComponent,
    ],
})
export class MethodItemMetadataListElementComponent
    extends ItemMetadataRepresentationListElementComponent {

    constructor(
        public dsoNameService: DSONameService,
    ) {
        super();
    }
}