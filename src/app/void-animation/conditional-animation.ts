import { animate, state, style, transition, trigger } from "@angular/animations";

export const conditionalAnimation = trigger('conditionalTrigger', [
    state('shown', style({
        // opacity: 0
    })),
    transition('void => shown', [
        style({
            opacity: 0
        }),
        animate('0.3s ease-out', style({
            opacity: 1
        }))
    ]),
    transition('shown => void', [
        animate(300, style({
            opacity: 0
        }))
    ])
])