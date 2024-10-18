const Footer = () => {
    const getCurrentYear = () => new Date().getFullYear()
  
    return (
      <footer className="w-full pt-12 pb-1 text-center text-white">
        <p className="text-sm mb-2">
          Gabriel Gałęza © {getCurrentYear()}. All rights reserved.
        </p>
        <p className="text-xs">
          This work is based on <a href="https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24" className="underline">"Smol Ame in an Upcycled Terrarium [HololiveEn]"</a> by <a href="https://sketchfab.com/seafoam" className="underline">Seafoam</a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/" className="underline">CC-BY-4.0</a>.
        </p>
      </footer>
    )
  }
  
  export default Footer
  