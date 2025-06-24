import './TopicsPage.css';
import TopicSlider from './TopicSlider';


function TopicsPage() {
    const topics =[
        {url: "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_3x2.jpg", title: "addition"},
        {url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg", title: "integer_addition"},
        {url: "https://m.media-amazon.com/images/I/61vEwCfFwvL.jpg", title: "long_addition"},
        {url: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg", title: "fraction_addition"}
    ];

    // TODO: 
    // - Update photos with topic texts and symbols
    // - Add user account info on sides
    // - clean up styling
    return (
        <div className='topic-page'>
            <h1 className = 'header-title'>BrainyBYTES</h1>
            <TopicSlider topics={topics} />
        </div>
        
    );
}

export default TopicsPage;