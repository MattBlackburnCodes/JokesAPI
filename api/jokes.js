export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const jokes = [
        { id: 1, j: "Why did the banana go to the doctor?", p: "Because it wasn’t peeling well!" },
        { id: 2, j: "What do you call cheese that isn’t yours?", p: "Nacho cheese… but you can have it if you promise not to make it weird." },
        { id: 3, j: "Why did the tomato turn red?", p: "Because it saw the salad dressing!" },
        { id: 4, j: "What’s a skeleton’s favorite room in the house?", p: "The living room—because the bedroom’s too rib-tickling." },
        { id: 5, j: "Why did the computer go on a date?", p: "It wanted to find its perfect “byte.”" },
        { id: 6, j: "Why don’t oysters donate to charity?", p: "Because they’re shellfish… and a little salty about it." },
        { id: 7, j: "Why did the coffee file a police report?", p: "It got mugged… twice." },
        { id: 8, j: "What did the blanket say to the bed?", p: "Don’t worry, I’ve got you covered… but only if you’re warm enough first." },
        { id: 9, j: "Why did the broom get promoted?", p: "Because it swept the competition—plus it was good at cleaning up after hours." },
        { id: 10, j: "Why was the math book always stressed?", p: "Too many problems—and none of them were cute word problems." },
        { id: 11, j: "Why did the scarecrow win an award?", p: "Because he was outstanding in his field… and a total snack for the crows." },
        { id: 12, j: "What do you call fake spaghetti?", p: "An impasta—al dente, just like my patience." },
        { id: 13, j: "Why did the cookie go to the nurse?", p: "Because it felt crummy… and was tired of getting dunked on." },
        { id: 14, j: "What did the left eye say to the right eye?", p: "Between us, something smells!" },
        { id: 15, j: "Why did the bicycle fall over?", p: "Because it was two-tired… or maybe it had one too many handlebar drinks." },
        { id: 16, j: "Why don’t eggs tell secrets?", p: "Because they might crack up." },
        { id: 17, j: "Why did the belt get arrested?", p: "For holding up a pair of pants… without consent." },
        { id: 18, j: "Why did the calendar break up with the clock?", p: "It felt like it was just being used for its dates." },
        { id: 19, j: "Why was the broom late for work?", p: "It overswept." },
        { id: 20, j: "Why did the orange stop halfway across the road?", p: "It ran out of juice." },
        { id: 21, j: "Why do ducks have feathers?", p: "To cover their butt quacks." },
        { id: 22, j: "Why was the pencil acting shady?", p: "It had a point… but didn’t want to draw attention." },
        { id: 23, j: "Why do cows wear bells?", p: "Because their horns don’t work—also they like to keep things kinky." },
        { id: 24, j: "Why don’t ghosts like rain?", p: "It dampens their spirits." },
        { id: 25, j: "Why did the sandwich refuse to fight?", p: "It didn’t want any beef." }
    ];

    res.status(200).json(jokes); 
}