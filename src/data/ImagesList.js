import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import BackendApp from '../images/Certificate/Belajar-membuat-aplikasi-back-end-untuk-pemula-1.jpg';
import Cloud from '../images/Certificate/Cloud-Practitioner-Essentials-Certificate-1.jpg';
import DasarJS from '../images/Certificate/Dasar-Pemrograman-Javascript-Certificate-1.jpg';
import HtmlCss from '../images/Certificate/HTML & CSS Certificate from Progate.jpg';
import FullStack from '../images/Certificate/Intro-To-Fullstack-Developer-Certificate-Kominfo-1.jpg';
import MySql from '../images/Certificate/Mysql-Certificate-from-Kominfo-1.jpg'
import NodeJS from '../images/Certificate/Node.Js-Certificate-from-Progate-1.jpg'
import PathWeb from '../images/Certificate/Path-Pengembangan-Web-Certificate-from-Progate-1.jpg';
import Phyton from '../images/Certificate/Phyton-Certificate-from-Progate-1.jpg';
import Sql from '../images/Certificate/SQL-Certificate-from-Progate-1.jpg';

import '../index.css'
import React from 'react'

const ImagesList = () => {
    return (
            <ImageList sx={{ width: 1200, height: 500 }} cols={5} gap={10}>
                {Images.map((item) => (
                    <ImageListItem key={item.data}>
                        <img
                            src={`${item.data}`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
    )
}


const Images = [
    {
        title: "Sertifikat Aplikasi Backend menggunakan NodeJS",
        data: BackendApp
    },
    {
        title: "Sertifikat Cloud Practitioner Essentials",
        data: Cloud
    },
    {
        title: "Sertifikat Dasar Pemrograman Javascript",
        data: DasarJS
    },
    {
        title: "Sertifikat Html & Css",
        data: HtmlCss
    },
    {
        title: "Sertifikat Intro To Full Stack Developer",
        data: FullStack
    },
    {
        title: "Sertifikat Mysql",
        data: MySql
    },
    {
        title: "Sertifikat NodeJS",
        data: NodeJS
    },
    {
        title: "Sertifikat Path Pengembangan Web",
        data: PathWeb
    },
    {
        title: "Sertifikat Python",
        data: Phyton
    },
    {
        title: "Sertifikat SQL",
        data: Sql
    },
];

export default ImagesList