import { animate, group, keyframes, state, style, transition, trigger } from "@angular/animations";

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
        animate('4000ms cubic-bezier(.23,1.25,.84,.63)', style({
            width: 0
        })),
        animate('4000ms cubic-bezier(.23,1.25,.84,.63)', style({
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
            animate('4000ms ease-in', keyframes([
                style({
                    background: 'red',
                    offset: 0
                }),
                style({
                    background: 'yellow',
                    offset: 0.9    
                }),
                style({
                    background: 'green',
                    offset: 1
                })
            ]))
        ]),
        animate(1000)
    ]),
    transition(':leave', [
        animate(300, style({
            opacity: 0
        }))
    ])
]);