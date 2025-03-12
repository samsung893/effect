export type Effect = {
    label: string;
    value: string;
    image: string;
    group: string
};

interface Effect_Temple {
    label: string;
    value: string;
}
export interface EffectsData {
    [key: string]: Effect_Temple[];
}