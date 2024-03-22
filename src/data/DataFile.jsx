import imag from '../Assets/image/1.png'
import imag2 from '../Assets/image/2.png'
import imag3 from '../Assets/image/3.png'
import svgimg1 from '../Assets/city-logo/delhi.png'
import svgimg2 from '../Assets/city-logo/banglore.png'
import svgimg3 from '../Assets/city-logo/hyderabad.png'
import svgimg4 from '../Assets/city-logo/pune.png'
import svgimg5 from '../Assets/city-logo/mumbai.png'
import svgimg6 from '../Assets/city-logo/chennai.png'
import img from '../Assets/image/1.png'
import img2 from '../Assets/image/2.png'
import img3 from '../Assets/image/3.png'
import img4 from '../Assets/image/aust.png'
import Videoimg from "../Assets/image/ourStudant.png"

const DataFile = [
    {
        city: 'Delhi NCR',
        img: svgimg1

    },
    {
        city: 'Bangolore',
        img: svgimg2
    },
    {
        city: 'Hyderabad',
        img: svgimg3
    },
    {
        city: 'Pune',
        img: svgimg4
    },
    {
        city: 'Mumbai',
        img: svgimg5
    },
    {
        city: 'Chennai',
        img: svgimg6
    }
]



const AboutDegree = [
    {
        degree: 'B.Com General',
        type: 'Full Time',
        duration: '3 Years',
        avgFee: '59.9k',
        colleges: '6354'
    },
    {
        degree: 'B.Ed General',
        type: 'Full Time',
        duration: '2 Years',
        avgFee: '82.42k',
        colleges: '5455'
    },
    {
        degree: 'BCA General',
        type: 'Full Time',
        duration: '3 Years',
        avgFee: '1.36L',
        colleges: '4938'
    },

]

const Abroad = [
    {
        imgg: imag,
        cardName: 'Study in USA',
        check: 'Check 3037 colleges',
        no: '1037',
        fee: '21.4k USD/Year',
        avgLivingCost: '15,000/year',
        ranking: '#1 in the world',
        keyFact1: 'High-quality education system',
        keyFact2: 'Diverse range of academic programs',
        keyFact3: 'Robust research opportunities',
        link: '/coming-soon'
    },

    {
        imgg: imag2,
        cardName: 'Study in UK',
        check: 'Check 170 colleges',
        no: '170',
        fee: '20.44K USD/Year',
        avgLivingCost: '12,000/year',
        ranking: '#2 in the world',
        keyFact1: 'Rich history of academic excellence',
        keyFact2: 'Cutting-edge research facilities',
        keyFact3: 'Internationally recognized degrees',
        link: '/coming-soon'
    },
    {
        imgg: imag3,
        cardName: 'Study in Canada',
        check: 'Check 221 colleges',
        no: '221',
        fee: '19.49K USD/Year',
        avgLivingCost: '10,000/year',
        ranking: '#3 in the world',
        keyFact1: 'World-class education at affordable cost',
        keyFact2: 'Multicultural & welcoming environment',
        keyFact3: 'Opportunities for post-graduation work',
        link: '/coming-soon'
    },
]

const GraphData = [
    {
        img: img,
        country: "USA",
        fields: {
            engineering: 25,
            business: 30,
            medicine: 20,
            law: 15,
            arts: 10,
        },
    },
    {
        img: img2,
        country: "UK",
        fields: {
            engineering: 20,
            business: 25,
            medicine: 18,
            law: 20,
            arts: 17,
        },
    },
    {
        img: img3,
        country: "Canada",
        fields: {
            engineering: 22,
            business: 28,
            medicine: 15,
            law: 18,
            arts: 17,
        },
    },
    {
        img: img4,
        country: "Australia",
        fields: {
            engineering: 23,
            business: 27,
            medicine: 17,
            law: 19,
            arts: 14,
        },
    },
]

const Videos = [
    {
        id: 1,
        thumbnail: Videoimg,
        title: 'Academic Tips and Strategies',
        subtitle: 'How to Succeed Academically as an International Student in the US',
        youtubeLink: 'https://youtu.be/fjiv1Jo7e_k?si=yJsqlnBypK-WUrWB'
    },
    {
        id: 2,
        thumbnail: Videoimg,
        title: 'Tips for International Students',
        subtitle: '5 Things to Know Before Studying Abroad in the US',
        youtubeLink: 'https://youtu.be/fjiv1Jo7e_k?si=yJsqlnBypK-WUrWB'
    },
    {
        id: 3,
        thumbnail: Videoimg,
        title: 'Academic Tips and Strategies',
        subtitle: 'How to Succeed Academically as an International Student in the US',
        youtubeLink: 'https://youtu.be/fjiv1Jo7e_k?si=yJsqlnBypK-WUrWB'
    },
    {
        id: 4,
        thumbnail: Videoimg,
        title: 'Understanding Campus Culture',
        subtitle: 'Navigating US Campus Life: A Guide for International Students',
        youtubeLink: 'https://youtu.be/fjiv1Jo7e_k?si=yJsqlnBypK-WUrWB'
    }
];


export { AboutDegree, Abroad, GraphData, Videos };
export default DataFile;
