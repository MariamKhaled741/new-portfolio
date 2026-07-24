import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  // الفلتر النشط حالياً
  activeFilter: string = 'All';
  
  // أقسام الفلاتر
  filters: string[] = ['All', 'Web Development & Cloud', 'Data Science & ML'];

  // حالة عرض كل المشاريع أو أول 6 فقط
  showAll: boolean = false;

  // كل مشاريعك
  allProjects = [
    {
      title: 'Medibook',
      category: 'Web Development & Cloud',
      description: 'Revolutionizing Clinic Workflows with SignalR Real-Time Notifications & Modular Design.',
      techStack: ['ASP.NET Core', 'SignalR', 'Angular'],
      image: 'assets/projects/medibook.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Advanced Hospital Analytics',
      category: 'Data Science & ML',
      description: 'Bridging the Gap Between Patient Care & Financial Outcomes using data analytics.',
      techStack: ['Power BI', 'Data Analytics'],
      image: 'assets/projects/hospital.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Hotel Reservation Cancellation Predictor',
      category: 'Data Science & ML',
      description: 'End-to-end ML pipeline utilizing Target Encoding, Lasso/PCA, and SVM (RBF) to build an interactive Streamlit app.',
      techStack: ['Python', 'Streamlit', 'SVM', 'PCA'],
      image: 'assets/projects/hotel.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'File Sharing Web App',
      category: 'Web Development & Cloud',
      description: 'A secure and scalable file sharing web application hosted on AWS.',
      techStack: ['AWS', 'Cloud', 'Web'],
      image: 'assets/projects/fileshare.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Gender Inequality Index (GII)',
      category: 'Data Science & ML',
      description: 'Data Preprocessing with Python & Visualization with Power BI.',
      techStack: ['Python', 'Power BI', 'Pandas'],
      image: 'assets/projects/gii.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Custom Linux Shell (myShell)',
      category: 'Web Development & Cloud',
      description: 'Developed core shell loop and parsing logic in C, handling multi-command pipelines and I/O redirection.',
      techStack: ['C', 'Linux', 'CLI'],
      image: 'assets/projects/shell.jpg',
      githubUrl: '#',
      demoUrl: null
    },
    {
      title: 'Multi-Restaurant Delivery System',
      category: 'Web Development & Cloud',
      description: 'Conducted requirements engineering & system modeling using State Machine Diagrams.',
      techStack: ['System Analysis', 'UML', 'Design'],
      image: 'assets/projects/delivery.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'The Social Media Impact Survey',
      category: 'Data Science & ML',
      description: 'Engineered the data preprocessing pipeline in Python for 453 respondents.',
      techStack: ['Python', 'Data Cleaning'],
      image: 'assets/projects/survey.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'House Price Prediction',
      category: 'Data Science & ML',
      description: 'Multiple Linear Regression model to predict house pricing based on various features.',
      techStack: ['Python', 'Scikit-Learn', 'MLR'],
      image: 'assets/projects/house.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Fully Responsive Dynamic Landing Page',
      category: 'Web Development & Cloud',
      description: 'Landing page with Custom CSS Animations and responsive design.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/projects/landing.jpg',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Crime Data Clustering',
      category: 'Data Science & ML',
      description: 'Unsupervised learning model applying clustering algorithms to crime datasets.',
      techStack: ['Python', 'Clustering', 'K-Means'],
      image: 'assets/projects/crime.jpg',
      githubUrl: '#',
      demoUrl: null
    },
    {
      title: 'Breast Cancer Classification',
      category: 'Data Science & ML',
      description: 'Classification model to accurately detect and classify breast cancer datasets.',
      techStack: ['Python', 'Classification', 'ML'],
      image: 'assets/projects/cancer.jpg',
      githubUrl: '#',
      demoUrl: null
    },
    {
      title: 'KNN Classification',
      category: 'Data Science & ML',
      description: 'Implemented K-Nearest Neighbors algorithm for categorical data classification.',
      techStack: ['Python', 'KNN', 'ML'],
      image: 'assets/projects/knn.jpg',
      githubUrl: '#',
      demoUrl: null
    },
    {
      title: 'Regression & Classification Models',
      category: 'Data Science & ML',
      description: 'A suite of various regression and classification models built from scratch.',
      techStack: ['Python', 'ML'],
      image: 'assets/projects/models.jpg',
      githubUrl: '#',
      demoUrl: null
    },
    {
      title: 'Product Rating Prediction',
      category: 'Data Science & ML',
      description: 'Predictive analytics model to forecast user ratings on products.',
      techStack: ['Python', 'Predictive Analysis'],
      image: 'assets/projects/product.jpg',
      githubUrl: '#',
      demoUrl: null
    },
    {
      title: 'College Website & Portfolio',
      category: 'Web Development & Cloud',
      description: 'Developed a college platform and personal portfolio website.',
      techStack: ['Angular', 'Web Design'],
      image: 'assets/projects/college.jpg',
      githubUrl: '#',
      demoUrl: '#'
    }
  ];

  // الدالة المحسنة لحساب المشاريع المفلترة بناءً على الـ Limit (6 مشاريع)
  get filteredProjects() {
    let filtered = this.allProjects;
    
    if (this.activeFilter !== 'All') {
      filtered = this.allProjects.filter(project => project.category === this.activeFilter);
    }

    return this.showAll ? filtered : filtered.slice(0, 6);
  }

  // دالة لمعرفة هل الفئة الحالية بها أكثر من 6 مشاريع لعرض الزرار أم لا
  get hasMoreProjects(): boolean {
    let count = this.allProjects.length;
    if (this.activeFilter !== 'All') {
      count = this.allProjects.filter(project => project.category === this.activeFilter).length;
    }
    return count > 6;
  }

  toggleShowMore() {
    this.showAll = !this.showAll;
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.showAll = false; // تصفير زر العرض عند تغيير الفلتر لمظهر أفضل
  }
}