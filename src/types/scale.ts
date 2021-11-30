type TScaleName = {
    date: string
    d: string
    h: string
    m: string
    s: string
    ms: string
}

type ObjectKey<Obj> = keyof Obj;

export type TScale = ObjectKey<TScaleName>