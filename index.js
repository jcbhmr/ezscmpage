import lips from "@jcubic/lips"

document.write(`<plaintext id="ezscmpage-plaintext" style="display: none !important">`)
globalThis.addEventListener("DOMContentLoaded", async (event) => {
    const plaintext = document.getElementById("ezscmpage-plaintext")
    const scm = plaintext.textContent.replace(/^\r?\n/, "")
    console.log(scm)
    const result = await lips.exec(scm)
    console.log(result)
})
