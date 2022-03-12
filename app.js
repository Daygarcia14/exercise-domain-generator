var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
var extension = ['.com', '.net', '.io']

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let z = 0; z < extension.length; z++) {
                console.log(pronoun[i] + adj[j] + noun[k] + extension[z] )
            }   
        }
    }
}