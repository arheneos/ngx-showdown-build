import { Pipe } from '@angular/core';
import { ShowdownConverter } from './showdown-converter.provider';
import * as i0 from "@angular/core";
/**
 * A angular pipe to transform `Markdown` to `HTML`.
 *
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownPipe } from 'ngx-showdown';
 *
 * @NgModule({
 *   declarations: [ ShowdownPipe ];
 * })
 * export class AppModule {}
 * ```
 *
 * Transform markdown value to html.
 * ```html
 * <input type="text" placeholder="Name" [(ngModel)]="name"/>
 * <div [innerHTML]="'**Hello '+(name || 'nobody')+'!**' | showdown">
 * ```
 *
 * Transform markdown value to html with `options`.
 * ```typescript
 * import * as Showdown from 'showdown';
 *
 * @Component({
 *   selector: 'some',
 *   template: `<div innerHTML="{{ text | showdown: options }}"></div>`
 * })
 * export class SomeComponent {
 *   text: string = "__Some Underline__";
 *   options: Showdown.ShowdownOptions = { underline: true };
 *   // ...
 * }
 * ```
 */
export class ShowdownPipe extends ShowdownConverter {
    /**
     * Transform markdown value to html.
     *
     * @param value - The markdown value to transform to html.
     * @param options - A `Showdown` converter options.
     * @returns Returns the transform result of `value` to html.
     */
    transform(value, options) {
        this.setOptions(options);
        return this.makeHtml(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownPipe, deps: null, target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.2", ngImport: i0, type: ShowdownPipe, name: "showdown", pure: false });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'showdown',
                    pure: false
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaG93ZG93bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUVsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NHO0FBS0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxpQkFBaUI7SUFFakQ7Ozs7OztPQU1HO0lBQ0gsU0FBUyxDQUFDLEtBQWEsRUFBRSxPQUFrQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO3VHQVpVLFlBQVk7cUdBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFKeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLEtBQUs7aUJBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBTaG93ZG93biBmcm9tICdzaG93ZG93bic7XG5pbXBvcnQgeyBTaG93ZG93bkNvbnZlcnRlciB9IGZyb20gJy4vc2hvd2Rvd24tY29udmVydGVyLnByb3ZpZGVyJztcblxuLyoqXG4gKiBBIGFuZ3VsYXIgcGlwZSB0byB0cmFuc2Zvcm0gYE1hcmtkb3duYCB0byBgSFRNTGAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBTZXR1cCBhcyBzdGFuZGFsb25lXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICogaW1wb3J0IHsgU2hvd2Rvd25QaXBlIH0gZnJvbSAnbmd4LXNob3dkb3duJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBkZWNsYXJhdGlvbnM6IFsgU2hvd2Rvd25QaXBlIF07XG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuICogYGBgXG4gKlxuICogVHJhbnNmb3JtIG1hcmtkb3duIHZhbHVlIHRvIGh0bWwuXG4gKiBgYGBodG1sXG4gKiA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIi8+XG4gKiA8ZGl2IFtpbm5lckhUTUxdPVwiJyoqSGVsbG8gJysobmFtZSB8fCAnbm9ib2R5JykrJyEqKicgfCBzaG93ZG93blwiPlxuICogYGBgXG4gKlxuICogVHJhbnNmb3JtIG1hcmtkb3duIHZhbHVlIHRvIGh0bWwgd2l0aCBgb3B0aW9uc2AuXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgKiBhcyBTaG93ZG93biBmcm9tICdzaG93ZG93bic7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnc29tZScsXG4gKiAgIHRlbXBsYXRlOiBgPGRpdiBpbm5lckhUTUw9XCJ7eyB0ZXh0IHwgc2hvd2Rvd246IG9wdGlvbnMgfX1cIj48L2Rpdj5gXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFNvbWVDb21wb25lbnQge1xuICogICB0ZXh0OiBzdHJpbmcgPSBcIl9fU29tZSBVbmRlcmxpbmVfX1wiO1xuICogICBvcHRpb25zOiBTaG93ZG93bi5TaG93ZG93bk9wdGlvbnMgPSB7IHVuZGVybGluZTogdHJ1ZSB9O1xuICogICAvLyAuLi5cbiAqIH1cbiAqIGBgYFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdzaG93ZG93bicsXG4gIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFNob3dkb3duUGlwZSBleHRlbmRzIFNob3dkb3duQ29udmVydGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBtYXJrZG93biB2YWx1ZSB0byBodG1sLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgbWFya2Rvd24gdmFsdWUgdG8gdHJhbnNmb3JtIHRvIGh0bWwuXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gQSBgU2hvd2Rvd25gIGNvbnZlcnRlciBvcHRpb25zLlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSB0cmFuc2Zvcm0gcmVzdWx0IG9mIGB2YWx1ZWAgdG8gaHRtbC5cbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogU2hvd2Rvd24uU2hvd2Rvd25PcHRpb25zKTogc3RyaW5nIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMubWFrZUh0bWwodmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==