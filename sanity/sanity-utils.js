import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: "6hutw20l",
    dataset: "production",
    apiVersion: "2024-12-25",
})

export async function getServices(){ 
 return client.fetch(
 groq`*[_type == "service"]{
 _id,
 _createdAt,
 name,
 "slug": slug.current,
 "image": image.asset->url,
 url,
 content
   }`
  )
}
export async function getNavItems(){
    return client.fetch(
        groq`*[_type == "navItem"]{
            _id,
            "logo": logo.asset->url,
            companyName,
            phoneNumber
        }`
    )
}
export async function getCarouselImages(){
    return client.fetch(
        groq`*[_type == "carouselImage"]{
        _id,
        "image": image.asset->url
        }`
    )
}
export async function getHeroSection(){
    return client.fetch(
        groq`*[_type == "herosection"]{
        _id,
        heading,
        paragraph,
        "image": image.asset->url
        }`
    )
}
export async function getDoctors(){
    return client.fetch(
        groq`*[_type == "doctor"]{
        _id,
        name,
        designation,
        "image": image.asset->url,
        }`
    )
}