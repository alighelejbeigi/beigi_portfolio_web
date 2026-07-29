export type Language = 'en' | 'fa';

export interface Technology {
  id: string;
  name: string;
  logo: string;
  category?: 'mobile' | 'web' | 'backend' | 'tools' | 'other';
}

export interface Project {
  id: string;
  typeKey: 'type_flutter_package' | 'type_flutter' | 'type_dart';
  category: 'package' | 'app' | 'dart';
  titleKey: string;
  descriptionKey: string;
  appPhotos: string;
  projectLink: string;
  techUsed: Technology[];
  buttonTextKey: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconLight: string;
  iconDark: string;
}
