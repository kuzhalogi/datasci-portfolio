import { Project, Skill } from './types';

export const PORTFOLIO_OWNER = "Kuzhalogi Murthy";
export const PORTFOLIO_ROLE = "Data Science & Analytics";
export const PORTFOLIO_BIO = "Specializing in scalable machine learning systems, computer vision applications, and turning complex data into actionable strategic insights.";

export const SKILLS: Skill[] = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'PyTorch/TF', level: 90, category: 'ML/DL' },
  { name: 'SQL', level: 85, category: 'Data Engineering' },
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'AWS', level: 85, category: 'Cloud' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Text to Music Generation',
    category: 'Machine Learning',
    shortDescription: 'Deep learning workflow that creates audio from text prompts.',
    fullDescription: 'Built a reproducible audio generation workflow using a VAE to map audio into a latent space and a diffusion model conditioned on text embeddings. Managed data loading, preprocessing, structured training runs, and evaluations of audio quality.',
    technologies: ['PyTorch', 'VAE', 'Diffusion Models', 'Librosa'],
    imageUrl: 'photos/Text-to-Music.png',
    features: ['Audio preprocessing', 'Latent space mapping', 'Text conditioned generation'],
    githubUrl: 'https://github.com/kuzhalogi/text2music.git'
  },
  {
    id: '2',
    title: 'Equipment Failure Prediction Application',
    category: 'Data Engineering',
    shortDescription: 'End to end pipeline for predicting equipment failures.',
    fullDescription: 'Developed a modular workflow with automated ingestion, validation, model training, and real time inference. Added a Streamlit interface for user interaction and a FastAPI service for predictions. Added tracking dashboards with Grafana and used Docker for a reproducible setup.',
    technologies: ['Scikit-learn','Python', 'FastAPI', 'Streamlit', 'Grafana', 'Airflow', 'GreatExpectattion'],
    imageUrl: 'photos/Benefits-of-Machine-Learning-for-Predictive-Maintenance.png',
    features: ['Automated retraining pipeline', 'SHAP value explainability dashboard', 'Drift detection'],
    githubUrl: 'https://github.com/kuzhalogi/EquipmentFailurePred.git'
  },
  {
    id: '3',
    title: 'Retail Store Sales Analysis',
    category: 'Data Analytics',
    shortDescription: 'Power BI dashboards for retail sales patterns.',
    fullDescription: 'Cleaned a dataset of more than twelve thousand records, handled missing values, and engineered features focused on customer revenue and category performance. Built interactive Power BI reports to support decisions on product strategy and sales channel performance.',
    technologies: ['Pandas', 'Power BI', 'SQL'],
    imageUrl: 'photos/customer_behavior_data_analytics.jpg',
    features: ['Real-time revenue tracking', 'Customer segmentation clustering visualization', 'Inventory forecasting'],
    githubUrl: 'https://github.com/kuzhalogi/Retail-Sales-Analysis.git'
  },
  {
    id: '4',
    title: 'Dead Plant Prediction',
    category: 'Computer Vision',
    shortDescription: 'CNN model that classifies plant leaf diseases.',
    fullDescription: 'Built a lightweight CNN that predicts three plant disease classes using a dataset of maize rust, potato early blight, and tomato bacterial spot images. The workflow includes preprocessing, augmentation, training, evaluation, and model export. The repository includes saved model files, weights, and the full training notebook.',
    technologies: ['CNN', 'Keras', 'Python'],
    imageUrl: 'photos/early_blight_plants.jpg',
    features: ['Three class disease prediction', 'Lightweight architecture', 'Training notebook'],
    githubUrl: 'https://github.com/kuzhalogi/ML_Vision_Projects/tree/main/Dead_Plant_Prediction'
  },
  {
    id: '5',
    title: 'Panda Detection using YOLOv8',
    category: 'Computer Vision',
    shortDescription: 'YOLOv8 model for detecting pandas in images.',
    fullDescription: 'Developed a YOLOv8 workflow to detect pandas using annotated datasets in YOLO format. The project includes scripts for converting labels, training runs, validation steps, and a notebook for inference and result visualization.',
    technologies: ['YOLOv8', 'Python', 'Ultralytics'],
    imageUrl: 'photos/Panda.jpg',
    features: ['YOLO annotation pipeline', 'Training and validation setup', 'Inference notebook'],
    githubUrl: 'https://github.com/kuzhalogi/ML_Vision_Projects/tree/main/Panda_detection'
  }
];
