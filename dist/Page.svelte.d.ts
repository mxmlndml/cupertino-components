import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        dimmed?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PageProps = typeof __propDef.props;
export type PageEvents = typeof __propDef.events;
export type PageSlots = typeof __propDef.slots;
export default class Page extends SvelteComponentTyped<PageProps, PageEvents, PageSlots> {
}
export {};
