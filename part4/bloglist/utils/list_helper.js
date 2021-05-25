const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    if(blogs.length == 0) {
        return 0
    } else if(blogs.length == 1) {
        return blogs['likes']
    } else if(blogs.length > 1) {
        let sum = blogs.reduce(function(prev, cur) {
            return prev + cur.likes
        })
        
    }
}
  
  module.exports = {
    dummy
  }