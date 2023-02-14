import { createServer } from "miragejs";
createServer({
    routes(){
    this.namespace="api"
    this.get("/movies",()=>{
    return {
    movies: [
    {id:1,image :"../imgs/Movie Poster 1.jpg"},
    {id:2,image :"./imgs/Movie Poster 2.jpg"},
    {id:3,image :"./imgs/Movie Poster 3.jpg"},
    {id:4,image :"./imgs/Movie Poster 4.jpg"},
    {id:5,image :"./imgs/Movie Poster 5.jpg"},
    {id:6,image :"./imgs/Movie Poster 6.jpg"},
    {id:7,image :"./imgs/Movie Poster 7.jpg"},
    {id:8,image :"./imgs/Movie Poster 8.jpg"},
    {id:9,image :"./imgs/Movie Poster 9.jpg"},
    {id:10,image :"./imgs/Movie Poster 10.jpg"},
    {id:10,image :"./imgs/Movie Poster 11.jpg"}
    ]
    }})
    
    
    
    this.get('user',()=>{
        return {
            "user":{
                name:"andrew",
                password:'ddd333',
            }
        }})
   
        
        
        
        }})