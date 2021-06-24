export default function Title({as, children}) {
    const TitleTag = as || 'h1';
    return <TitleTag className="font-bold text-purple-900 text-2xl mb-1">
        {children}
    </TitleTag>
}