import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  events = [
    {
      name: "Maryland Tech Invitational",
      date: "23-25.06.2023",
      imageUrl: "/assets/events/MTI.webp",
      link: ""
    },
    {
      name: "Regionala #1 FTC Romania PowerPlay",
      date: "13-15.02.2023",
      imageUrl: "/assets/events/Regionala.webp",
      link: ""
    },
    {
      name: "Weekend-ul de Mentorare STEM",
      date: "28-29.01.2023",
      imageUrl: "/assets/events/Weekend-ul-de-mentorare-STEM.webp",
      link: "https://www.instagram.com/reel/CoCrFHQNxL3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "Colinda Roboticii",
      date: "24.12.2022",
      imageUrl: "/assets/events/Colinda Roboticii.webp",
      link: "https://www.youtube.com/watch?v=g0O6svErCxQ"
    },
    {
      name: "DeCyPher",
      date: "20.12.2022",
      imageUrl: "/assets/events/Decypher.webp",
      link: "https://www.instagram.com/p/CmHXtyusp-K/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "Photoshop Battles",
      date: "10-14.12.2022",
      imageUrl: "/assets/events/Photoshop Battles.webp",
      link: "https://www.instagram.com/p/CligC-UMrra/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "CySchool",
      date: "Data primului episod: 04.12.2022",
      imageUrl: "/assets/events/CySchool.webp",
      link: "https://youtube.com/playlist?list=PLLuFo7Z6rAaOZ9ipRd1CXPRReringRNhG"
    },
    {
      name: "ReCyLiis",
      date: "18-20.11.2022",
      imageUrl: "/assets/events/ReCyLiis.webp",
      link: "https://www.instagram.com/p/ClD44YKMbBr/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "Quantum League Iasi Edition",
      date: "13.11.2022",
      imageUrl: "/assets/events/Quantum-League-Iasi.webp",
      link: "https://www.youtube.com/watch?v=Zr6tDwk5dGs"
    },
    {
      name: "Cylloween Second Edition",
      date: "28-30.10.2022",
      imageUrl: "/assets/events/Cylloween.webp",
      link: "https://www.instagram.com/p/Cjz6EZCM7s2/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "CyQuiz",
      date: "08.10.2022",
      imageUrl: "/assets/events/CyQuiz.webp",
      link: "https://www.instagram.com/p/CjS10aEj7s0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "Kick-Off FTC",
      date: "10-11.09.2022",
      imageUrl: "/assets/events/8.webp",
      link: "https://www.youtube.com/watch?v=MmZAB44qF_I"
    },
    {
      name: "House of CyLiis",
      date: "27.08-04.09.2022",
      imageUrl: "/assets/events/House of CyLiis 2022.webp",
      link: "https://www.instagram.com/p/Cg_nzOloBEV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "Interviuri",
      date: "summer 2022",
      imageUrl: "/assets/events/6.webp",
      link: "https://www.instagram.com/p/CejHTvMIM7g/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "CyJam",
      date: "05-10.03.2022",
      imageUrl: "/assets/events/CyJam.webp",
      link: "https://www.instagram.com/p/CacofISII7_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "Christmas Hunt",
      date: "04.12.2021",
      imageUrl: "/assets/events/3.webp",
      link: "https://www.instagram.com/p/CWwBDZdoKxW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "Cylloween Trick or Print",
      date: "29-31.10.2021",
      imageUrl: "/assets/events/2.webp",
      link: "https://www.instagram.com/p/CVfQ6HLBgsX/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    },
    {
      name: "House of Cyliis",
      date: "29.08-05.09.2021",
      imageUrl: "/assets/events/1.webp",
      link: "https://www.instagram.com/p/CSZCzkuonf8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA== "
    }
  ]


}
