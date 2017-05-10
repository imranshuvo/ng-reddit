export class Article {
	title: string;
	link: string;
	points: number;

	constructor(title: string,link: string,points?: number){
		this.title = title;
		this.link = link;
		this.points = points || 0;
	}

	voteUp(): void{
		this.points += 1;
		console.log(this.points);
	}

	voteDown(): void{
		this.points -= 1;
	}


}