import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <>
      <head>
        {/* HTML Meta Tags */}
        <title>Welcome to KidsCollab Gamma!</title>
        <meta name="description" content="KidsCollab Gamma is a dev version of KidsCollab Beta" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://kidscollab.github.io/KidsCollab/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Welcome to KidsCollab Gamma!" />
        <meta property="og:description" content="KidsCollab Gamma is a dev version of KidsCollab Beta" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/5c6c39d7-8c9f-4c59-b708-b7725b9b9efa.png?token=6xQ0OWkmHx2EPdHFNKvmzpsc-gf52pBTZ2PyYBZv9yA&height=1024&width=1024&expires=33274998514" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="kidscollab.github.io" />
        <meta property="twitter:url" content="https://kidscollab.github.io/KidsCollab/" />
        <meta name="twitter:title" content="Welcome to KidsCollab Gamma!" />
        <meta name="twitter:description" content="KidsCollab Gamma is a dev version of KidsCollab Beta" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/5c6c39d7-8c9f-4c59-b708-b7725b9b9efa.png?token=6xQ0OWkmHx2EPdHFNKvmzpsc-gf52pBTZ2PyYBZv9yA&height=1024&width=1024&expires=33274998514" />
      </head>
      {children.length > 0 ? <header>{children}</header> : null}
    </>
  )
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor