import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  landingCards = [
    {
      name: 'Xplore for Students',
      points: [
        'Xplore Placement Club',
        'Finishing School Program'
      ],
      background_color: '#FFB710',
      img: 'assets/images/cards/landing page/std.png',
    },
    {
      name: 'Xplore for Corporates',
      points: [
        'Hiring Assessments',
        'Job Board',
        'Corporate Training'
      ],
      background_color: '#7181FF',
      img: 'assets/images/cards/landing page/corp.png'
    },
    {
      name: 'Xplore for Institutions',
      points: [
        'Campus Recruitment Training',
        'Company Specific Training',
        'Proctored Online Examination',
        'Xplore Placement Club'
      ],
      background_color: '#2CE786',
      img: 'assets/images/cards/landing page/ins.png'
    },
  ]

  milestones = [
    {
      name: 'Registered students.',
      value: '150000 +'
    },
    {
      name: 'Students placed.',
      value: '4000 +'
    },
    {
      name: 'College network.',
      value: '300+'
    },
    {
      name: 'Corporate Connect.',
      value: '400+'
    },
  ]

  challenges = [
    {
      name: 'Identify Quality and Quantity',
      img: 'assets/images/cards/challenges/quality.png',
      about: 'Get accurate insights by planning your campus drive with Xplore. We help you pick colleges that perfectly fit your quality parameters.'
    },
    {
      name: 'Save Time',
      img: 'assets/images/cards/challenges/saveTime.png',
      about: 'With Xplore, you can easily save time and effort in travelling to different colleges for hiring. An added advantage - you already know your candidate before even entering the campus!'
    },
    {
      name: 'Reduce & Training-Deployment',
      img: 'assets/images/cards/challenges/team.png',
      about: 'Xplore offers ‘Job-ready programs’ that help you get a higher ROI. Hence, when you hire from campuses registered with us, you reduce the lead time in training and shadow deployment.'
    },
  ]

  whyUs = [
    [
      {
        name: 'Colossal Network',
        about: 'We are connected to over 300 colleges across India which gives you access to lakhs of students',
        bg:'#FFB710'
      },
      {
        name: 'Branding',
        about: 'With Xplore, you can find not only the right talent but also win the branding game. You can upload your company logo for the candidates to get familiar with your brand.',
        bg:'#7181FF'
      },
    ],
    [
      {
        name: 'Hassle-Free',
        about: 'Leave all operational hassles to us. With a platform like Xplore, you can sit back while we source the best candidates from broader geographies.',
        bg:'#7181FF'
      },
      {
        name: 'Get Access To Insights',
        about: 'We offer in-depth reporting and insights to optimize the complete process. You can easily export the reports and share.',
        bg:'#FFB710'
      },
    ],
    [

      {
        name: 'Custom Tests',
        about: 'We offer a wide range of questions (10,000 +). You can create your own tests as well from scratch based on the requirements.',
        bg:'#7181FF'
      },
      {
        name: 'Predefined Assessment',
        about: 'Our Skill test is a comprehensive assessment which checks a candidate’s aptitude, domain knowledge, technical as well as communication skills.',
        bg:'#2CE786'
      },
    ],
    [
      {
        name: 'AI-based Proctring',
        about: 'Our AI-based online proctoring is used for identity verification and cheating prevention. You can select genuine performers.',
        bg:'#2CE786'
      },
      {
        name: 'Expertise',
        about: 'Find the right talent by leveraging our expertise. We are a team of highly experienced individuals with an experience of 20 years in this industry. We know what you need!',
        bg:'#7181FF'
      },
    ]
  ]
  collages = [
    'assets/images/organizations/a.png',
    'assets/images/organizations/b.png',
    'assets/images/organizations/c.png',
    'assets/images/organizations/d.png',
    'assets/images/organizations/e.png',
    'assets/images/organizations/f.png',
    'assets/images/organizations/g.png',
    'assets/images/organizations/h.png',
    'assets/images/organizations/i.png',
    'assets/images/organizations/j.png',
    'assets/images/organizations/k.png',
    'assets/images/organizations/l.png',
    'assets/images/organizations/m.png',
    'assets/images/organizations/n.png',
    'assets/images/organizations/h.png',
    'assets/images/organizations/i.png',
    'assets/images/organizations/j.png',
    'assets/images/organizations/k.png',
    'assets/images/organizations/l.png',
    'assets/images/organizations/m.png',
    'assets/images/organizations/n.png',
  ]

}
