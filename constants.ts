import { Project, SkillGroup, Experience, Education, Language } from './types';

import healthcareImg from './images/healthcare-cloud.svg';
import energyImg from './images/france-energy-elt.svg';
import equipmentImg from './images/equipment-failure.svg';
import cfrpImg from './images/cfrp-segmentation.svg';
import musicImg from './images/text2music.svg';
import pandaImg from './images/panda-detection.svg';
import retailImg from './images/retail-sales.svg';

export const PORTFOLIO_OWNER = "Kuzhalogi Murthy";
export const PORTFOLIO_ROLE = "Data Science & Analytics";
export const PORTFOLIO_BIO = "I build data pipelines with Airflow and dbt, cloud infrastructure as code on AWS, and deep-learning models in PyTorch.";

// Single source of truth for availability. It updates itself: before the
// start date it shows a month, and afterwards it flips to "available now",
// so the site never displays a stale exact day.
const AVAILABILITY_START = new Date(2026, 8, 8); // 8 September 2026 (month is 0-indexed)
export const IS_AVAILABLE_NOW = new Date() >= AVAILABILITY_START;
export const AVAILABILITY = IS_AVAILABLE_NOW
  ? "Available now for a CDI in Europe"
  : "Available for a CDI in Europe, from September 2026";
export const AVAILABILITY_SENTENCE = IS_AVAILABLE_NOW
  ? "I'm looking for a permanent (CDI) role in data science or analytics, available now, anywhere in Europe."
  : "I'm looking for a permanent (CDI) role in data science or analytics, anywhere in Europe, starting September 2026.";
export const LOCATION = "Ivry-sur-Seine, Paris area";
export const EMAIL = "kuzhalogiyogis@gmail.com";
export const GITHUB_URL = "https://github.com/kuzhalogi";
export const LINKEDIN_URL = "https://linkedin.com/in/mkuzhalogi";

export const ABOUT_PARAGRAPHS: string[] = [
  "I'm finishing a Master of Computer Science in data science and analytics at EPITA in Paris, and currently a data analyst intern at Groupe Ishitva. Before my Master's I spent about 18 months at Cognizant supporting production databases, and I first trained as a mechanical engineer.",
];

export const SKILL_GROUPS: SkillGroup[] = [
  { category: 'Languages & Query', items: ['Python', 'SQL'] },
  { category: 'ML & Deep Learning', items: ['PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'Diffusion Models'] },
  { category: 'Computer Vision', items: ['U-Net', 'ResNet', 'YOLOv8', 'CNNs'] },
  { category: 'Data Engineering', items: ['dbt', 'Airflow', 'Postgres', 'Great Expectations'] },
  { category: 'Cloud & MLOps', items: ['AWS', 'Terraform', 'Docker', 'FastAPI'] },
  { category: 'Analytics & Viz', items: ['Pandas', 'Power BI', 'Streamlit', 'Grafana'] },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Data Analyst Intern',
    company: 'Groupe Ishitva',
    period: 'Mar 2026 – Sep 2026',
    location: 'Paris, France',
    points: [
      'Built the analysis and reporting environment for an international innovation summit, covering startup applications, marketing, and registrations.',
    ],
  },
  {
    role: 'Programming Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'Apr 2022 – Sep 2023',
    location: 'India',
    points: [
      'Supported production databases for a cloud infrastructure services team, handling incidents raised over email and Teams.',
      'Diagnosed and fixed issues from Oracle logs using SQL, PL/SQL, and Bash, and optimised queries with proactive monitoring.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Science, Data Science and Analytics',
    school: 'EPITA, Paris',
    period: '2024 – 2026',
  },
  {
    degree: 'BTech, Mechanical Engineering',
    school: 'Sri Manakula Vinayagar Engineering College, Puducherry',
    period: '2018 – 2022',
    detail: '8.1 / 10 GPA',
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Tamil', level: 'native' },
  { name: 'English', level: 'fluent' },
  { name: 'French', level: 'B1' },
  { name: 'German', level: 'basics' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Healthcare Cloud Reference Architecture',
    category: 'Cloud & MLOps',
    shortDescription: 'Serverless AWS reference architecture, defined entirely as Terraform.',
    fullDescription: 'A serverless healthcare-records reference architecture on AWS, defined entirely as Terraform and validated by a real deploy-then-destroy cycle (the Terraform is the durable artifact, running cost is zero between demos). A React frontend is served through CloudFront and a private S3 bucket; an HTTP API Gateway with Cognito JWT auth enforces role-based access for doctors and patients; three Node.js 20 Lambda microservices handle records, appointments, and documents; per-service DynamoDB tables and S3 storage are encrypted with a customer-managed KMS key. Observability runs through CloudWatch dashboards and SNS alerts, deployed via GitHub Actions with OIDC and no stored credentials. This is a demonstration of the security controls, not a HIPAA-compliant production system.',
    technologies: ['Terraform', 'AWS', 'Lambda', 'Cognito', 'API Gateway', 'DynamoDB', 'CloudFront', 'KMS'],
    imageUrl: healthcareImg,
    features: [
      'Role-based access enforced from the JWT: doctor write (201), patient blocked (403)',
      'Per-service IAM roles and customer-managed KMS encryption',
      'GitHub Actions OIDC deploys with no stored credentials',
    ],
    githubUrl: 'https://github.com/kuzhalogi/healthcare-cloud'
  },
  {
    id: '2',
    title: 'France Energy ELT Pipeline',
    category: 'Data Engineering',
    shortDescription: 'End to end ELT for French regional energy data, around 2.8M rows.',
    fullDescription: 'An end to end ELT pipeline for French regional energy data from the ODRE open-data portal, covering half-hourly consumption, regional temperatures, and production by source back to 2013. Data is extracted from the API, preprocessed and validated, loaded into Postgres via COPY, then modelled with dbt into staging, intermediate, and marts layers following a star schema. It is orchestrated with Airflow in Docker, with pytest and dbt tests and a GitHub Actions CI pipeline.',
    technologies: ['Airflow', 'dbt', 'PostgreSQL', 'Docker', 'Python', 'Pandas', 'GitHub Actions'],
    imageUrl: energyImg,
    features: [
      'Incremental loading of a ~2.8M row consumption dataset',
      'dbt star schema across staging, intermediate, and marts',
      'Automated pytest and dbt tests in CI',
    ],
    githubUrl: 'https://github.com/kuzhalogi/france-energy-elt'
  },
  {
    id: '3',
    title: 'ML Pipeline for Equipment Failure',
    category: 'Data Engineering',
    shortDescription: 'End to end ML pipeline: ingestion, validation, serving, monitoring.',
    fullDescription: 'A local, end to end ML pipeline built to understand how the pieces of a real ML system fit together, ingestion, validation, serving, and monitoring, rather than to ship a tuned model. A stand-in Random Forest predicts failures on a synthetic milling-machine dataset (10,000 rows). Great Expectations validates each batch and routes good and bad data separately, an Airflow job triggers predictions through a FastAPI service, results persist to Postgres, and Grafana dashboards track data integrity and model behaviour. Users interact through a Streamlit interface or the API, and the whole stack is containerised with Docker. The model is deliberately left untuned: at 0.80 AUC it favours precision (86%) over recall (60%), which the project surfaces on purpose rather than hides.',
    technologies: ['Airflow', 'FastAPI', 'Great Expectations', 'Streamlit', 'Grafana', 'PostgreSQL', 'Scikit-learn', 'Docker'],
    imageUrl: equipmentImg,
    features: [
      'Great Expectations validation with good/bad data routing',
      'FastAPI serving orchestrated by scheduled Airflow jobs',
      'Real-time Grafana monitoring of data and model behaviour',
    ],
    githubUrl: 'https://github.com/kuzhalogi/EquipmentFailurePred'
  },
  {
    id: '4',
    title: 'CFRP Micrograph Segmentation',
    category: 'Computer Vision',
    shortDescription: 'Semantic segmentation of composite micrographs, 0.78 mean IoU.',
    fullDescription: 'Pixel-wise semantic segmentation of carbon-fibre-reinforced-polymer (CFRP) micrographs into four material phases, using a U-Net decoder on an ImageNet-pretrained ResNet-34 encoder (24.4M parameters, segmentation-models-pytorch). Trained on 549 patches from two micrographs and evaluated on a completely held-out third micrograph: 0.779 mean IoU and 92.6% pixel accuracy, including 0.585 IoU on a defect class that is under 1% of the pixels but appears in most patches. A 3-seed ablation showed the pretrained encoder and class weighting drive the results more than the choice of loss, an honest reading rather than an oversold one.',
    technologies: ['PyTorch', 'U-Net', 'ResNet-34', 'segmentation-models-pytorch', 'Albumentations'],
    imageUrl: cfrpImg,
    features: [
      '0.779 mean IoU and 92.6% pixel accuracy on a held-out micrograph',
      'U-Net decoder on ImageNet-pretrained ResNet-34 encoder',
      'Transfer learning on a tiny dataset with genuine unseen-image testing',
    ],
    githubUrl: 'https://github.com/kuzhalogi/cfrp-micrograph-segmentation'
  },
  {
    id: '5',
    title: 'Text to Music Generation',
    category: 'Machine Learning',
    shortDescription: 'Team proof-of-concept for text to audio via latent diffusion. I built the VAE.',
    fullDescription: 'A team proof-of-concept that generates music from natural-language prompts using latent diffusion. A VAE compresses Mel-spectrograms into a latent space, a CLIP text encoder conditions generation, and a diffusion UNet denoises in that latent space, cutting inference time by roughly 55% versus raw-waveform diffusion. Outputs have recognisable structure and quality (a piano prompt comes out coherent, a drum prompt shows spectral artifacts), so it is a foundation for further work on fidelity, not a finished product. Built with PyTorch and Hugging Face diffusers and transformers.',
    myRole: 'I designed, built, and trained the VAE, including dataset collection, cleaning, Mel-spectrogram generation, and hyperparameter tuning (validation reconstruction loss around 0.028). Teammates handled the CLIP text encoder and the diffusion UNet.',
    technologies: ['PyTorch', 'Diffusers', 'Transformers', 'VAE', 'CLIP', 'torchaudio', 'Librosa'],
    imageUrl: musicImg,
    features: [
      'VAE reconstruction loss around 0.028 on Mel-spectrograms',
      'Latent diffusion, roughly 55% faster than raw-waveform',
      'Text conditioning via CLIP cross-attention',
    ],
    githubUrl: 'https://github.com/kuzhalogi/text2music'
  },
  {
    id: '6',
    title: 'Panda Detection with YOLOv8',
    category: 'Computer Vision',
    shortDescription: 'Object detection of pandas using a YOLOv8 workflow.',
    fullDescription: 'An object-detection workflow that detects pandas in images using YOLOv8. It covers converting annotations to YOLO format, training and validation runs, and an inference notebook for visualising predictions. A compact project focused on the full detection workflow, complementing the segmentation work with a different computer-vision task.',
    technologies: ['YOLOv8', 'Ultralytics', 'Python', 'OpenCV'],
    imageUrl: pandaImg,
    features: [
      'YOLO-format annotation pipeline',
      'Training and validation runs',
      'Inference and visualisation notebook',
    ],
    githubUrl: 'https://github.com/kuzhalogi/ML_Vision_Projects/tree/main/Panda_detection'
  },
  {
    id: '7',
    title: 'Retail Store Sales Analysis',
    category: 'Data Analytics',
    shortDescription: 'Power BI analysis of 12,575 retail transactions.',
    fullDescription: 'A data-cleaning and business-intelligence exercise on 12,575 messy retail transactions from Kaggle. I handled missing values across items, prices, and quantities in Python, checked that the arithmetic across records stayed consistent, then built three interactive Power BI dashboards for sales overview, customer spending, and transaction trends. Descriptive findings include January revenue peaks each year, the Butchers category leading at 13.6% of revenue, and online sales slightly edging out in-store.',
    technologies: ['Power BI', 'Python', 'Pandas', 'SQL'],
    imageUrl: retailImg,
    features: [
      'Cleaned and consistency-checked 12,575 transactions',
      'Three interactive Power BI dashboards',
      'Descriptive findings on seasonality, top categories, and channel mix',
    ],
    githubUrl: 'https://github.com/kuzhalogi/Retail-Sales-Analysis'
  }
];
