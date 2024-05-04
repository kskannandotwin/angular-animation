import { animate, group, state, style, transition, trigger } from "@angular/animations";

export const conditionalAnimation = trigger('conditionalTrigger', [
    // transition('void => *', [
    //     style({
    //         opacity: 0
    //     }),
    //     animate('0.3s ease-out', style({
    //         opacity: 1
    //     }))
    // ]),
    // transition('* => void', [
    //     animate(300, style({
    //         opacity: 0
    //     }))
    // ])

    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('0.3s ease-out', style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate(300, style({
            opacity: 0
        }))
    ])
]);

export const shrinkAnimation = trigger('shrinkAnimation', [
    transition('* => *', [
        animate(400, style({
            width: 0
        })),
        animate(400, style({
            width: '*'
        }))
    ])
])

export const listAnimation = trigger('listTrigger', [
    transition(':enter', [
        style({
            opacity: 0,
            background: 'white'
        }),
        group([
            animate(1000, style({
                opacity: 1
            })),
            animate(2000, style({
                backgroundColor: 'red'
            }))
        ]),
        animate(1000)
    ]),
    transition(':leave', [
        animate(300, style({
            opacity: 0
        }))
    ])
]);