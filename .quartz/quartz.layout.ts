import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent } from "./quartz/components/types"
import { QuartzPluginData } from "./quartz/plugins/vfile"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/luissimas",
    },
  }),
}

const leftComponents: QuartzComponent[] = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Search(),
  Component.Darkmode(),
  Component.DesktopOnly(Component.RecentNotes({
    title: "Recent posts",
    limit: 3,
    showTags: false,
    linkToMore: "tags/post" as SimpleSlug,
    filter: (data: QuartzPluginData) => !!data.frontmatter?.tags?.includes("post"),
  })),
  Component.DesktopOnly(Component.RecentNotes({
    title: "Recent notes",
    limit: 3,
    linkToMore: "Notes/" as SimpleSlug,
  })),
]

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: leftComponents,
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: leftComponents,
  right: [],
}
