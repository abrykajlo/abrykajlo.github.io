import type { MetaData } from "$lib/types"
import type { SvelteComponent } from "svelte"

type SVXImport = {
    default: SvelteComponent
    metadata: MetaData
}

const glob: { [path: string]: SVXImport } = import.meta.glob('$lib/posts/**/*.svx', { eager: true })
const _slugPostMap: { [slug: string]: SVXImport } = {}
const _metadatas: MetaData[] = []
for (const path in glob) {
    const match = path.match(/\/([a-z][-a-z]+[a-z]).svx/)
    const slug = match ? match[1] : ''
    const post = glob[path]
    _slugPostMap[slug] = post
    const metadata = post.metadata
    metadata.slug = slug
    _metadatas.push(metadata)
}
_metadatas.sort((a: MetaData, b: MetaData) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
})
export const slugPostMap: { [slug: string]: SVXImport } = _slugPostMap
export const metadatas: MetaData[] = _metadatas