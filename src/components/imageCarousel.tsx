import * as React from 'react';

export interface CarouselProps {
    type: "project"; //For now it can only be project, but incase more types are added. String is cleaner than enum in this case.
    path: string;
    count: number;
}

export default class ImageCarousel extends React.Component<CarouselProps> {
    state = {
        index: 1,
        imageDir: null,
        imagePath: null,
        imageScroll: null,
        interrupted: false,
    }

    constructor(props: CarouselProps) {
        super(props);
        setTimeout(this.updateImage, 100)
    }

    componentDidMount = () => {
        this.setState({imageDir: `/img/proj/${this.props.path}/`});
    }

    updateImage = async() => {
        if (this.state.interrupted)
            return;
        this.setState({imagePath: this.state.imageDir + this.state.index + '.png'});
        this.setState({index: this.state.index + 1});
        if (this.state.index >= this.props.count)
            this.setState({index: 1});
        this.genScroll();
        setTimeout(this.updateImage, 5000)
    }

    genScroll = () => {
        let imageScroll = [];
        for (let i = 1; i <= this.props.count; i++) {
            imageScroll.push(
            <button className="ml-4" id={"imageCarouselButton_" + i} onClick={() => {
                this.setState({index: i, interrupted: true});
                this.setState({imagePath: this.state.imageDir + i + '.png'});
                setTimeout(this.genScroll, 50); //Otherwise the scroll doesn't update if the timeout isn't here.
                let target = document.getElementById("imageCarouselButton_" + i);
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }}>
                <img 
                    src={this.state.imageDir + i + '.png'}
                    className={
                    "object-contain max-w-[70vw] sm:max-w-[50vw] md:max-w-[40vw] h-32 border-solid border-highlight "
                    + (this.state.index == i ? "border-4" : "")}>
                </img>
            </button>);
        }
        this.setState({imageScroll: imageScroll});
    }

    render = () => {
        return (
            <div>
                <img src={this.state.imagePath} className="m-auto mt-8 max-w-[75%] sm:max-w-[50%] md:max-w-[30%] max-h-48 md:max-h-64 lg:max-h-92"/>
                <div className="flex overflow-x-scroll w-[80vw] m-auto mt-8 scrollbar" id="imageCarouselContainer">
                    {this.state.imageScroll} 
                </div>
            </div>
        )
    }
}
