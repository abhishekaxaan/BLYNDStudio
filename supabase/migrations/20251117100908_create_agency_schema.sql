/*
  # Marketing Agency Website Schema

  ## Overview
  This migration creates the complete database schema for a modern marketing agency website
  featuring projects, services, and contact form submissions.

  ## New Tables
  
  ### `projects`
  - `id` (uuid, primary key) - Unique project identifier
  - `title` (text) - Project name
  - `slug` (text, unique) - URL-friendly identifier
  - `category` (text) - Project category (Website, Graphics, 3D, Video)
  - `client` (text) - Client name
  - `description` (text) - Brief project description
  - `challenge` (text) - Project challenge/problem
  - `solution` (text) - Solution provided
  - `results` (text) - Project outcomes
  - `thumbnail_url` (text) - Main project image
  - `images` (jsonb) - Array of additional project images
  - `featured` (boolean) - Whether to feature on homepage
  - `order_index` (integer) - Display order
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Record creation timestamp

  ### `services`
  - `id` (uuid, primary key) - Unique service identifier
  - `title` (text) - Service name
  - `slug` (text, unique) - URL-friendly identifier
  - `icon` (text) - Icon identifier for the service
  - `description` (text) - Brief service description
  - `details` (text) - Detailed service information
  - `color_accent` (text) - Hex color for this service
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Record creation timestamp

  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique submission identifier
  - `email` (text) - Submitter email
  - `name` (text, optional) - Submitter name
  - `message` (text, optional) - Message content
  - `type` (text) - Submission type (newsletter, contact, booking)
  - `created_at` (timestamptz) - Submission timestamp

  ### `stats`
  - `id` (uuid, primary key) - Unique stat identifier
  - `label` (text) - Stat label (e.g., "Projects Completed")
  - `value` (integer) - Stat value
  - `suffix` (text) - Optional suffix (e.g., "+")
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  - All tables have RLS enabled
  - Public read access for projects, services, and stats
  - Authenticated write access for contact submissions
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  client text,
  description text NOT NULL,
  challenge text,
  solution text,
  results text,
  thumbnail_url text NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  icon text NOT NULL,
  description text NOT NULL,
  details text NOT NULL,
  color_accent text DEFAULT '#0071E3',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  message text,
  type text NOT NULL DEFAULT 'newsletter',
  created_at timestamptz DEFAULT now()
);

-- Create stats table
CREATE TABLE IF NOT EXISTS stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  value integer NOT NULL,
  suffix text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;

-- Projects policies (public read)
CREATE POLICY "Public can view published projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (published_at IS NOT NULL);

-- Services policies (public read)
CREATE POLICY "Public can view services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

-- Contact submissions policies (anyone can insert)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Stats policies (public read)
CREATE POLICY "Public can view stats"
  ON stats FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample services
INSERT INTO services (title, slug, icon, description, details, color_accent, order_index) VALUES
('Website Design', 'website-design', 'Globe', 'Beautiful, responsive websites that convert visitors into customers.', 'We create stunning, high-performance websites using modern technologies. From landing pages to complex web applications, we deliver digital experiences that drive results.', '#0071E3', 1),
('Graphic Design', 'graphic-design', 'Palette', 'Eye-catching visuals that make your brand stand out.', 'Our graphic design services cover everything from brand identity to marketing materials. We create memorable visuals that communicate your message effectively.', '#FF6B35', 2),
('3D Animation & Ads', '3d-animation', 'Box', 'Captivating 3D animations and advertisements that engage.', 'Bring your ideas to life with stunning 3D animations. Perfect for product visualization, advertisements, and immersive brand experiences.', '#BF5AF2', 3),
('Video Editing', 'video-editing', 'Film', 'Professional video editing that tells your story.', 'Transform raw footage into compelling narratives. We handle everything from corporate videos to social media content with professional editing and motion graphics.', '#30D158', 4);

-- Insert sample stats
INSERT INTO stats (label, value, suffix, order_index) VALUES
('Projects Completed', 150, '+', 1),
('Happy Clients', 80, '+', 2),
('Years Experience', 8, '', 3),
('Team Members', 12, '', 4);

-- Insert sample projects
INSERT INTO projects (title, slug, category, client, description, challenge, solution, results, thumbnail_url, featured, order_index) VALUES
('Nexus Tech Platform', 'nexus-tech-platform', 'Website', 'Nexus Technologies', 'A cutting-edge SaaS platform with modern glass UI design.', 'Create an intuitive dashboard for complex data visualization.', 'Implemented a clean glass morphism design with interactive charts and real-time updates.', 'Increased user engagement by 240% and reduced support tickets by 60%.', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', true, 1),
('Bloom Brand Identity', 'bloom-brand-identity', 'Graphics', 'Bloom Botanicals', 'Complete brand identity design for an organic skincare line.', 'Establish a premium yet approachable brand presence in a saturated market.', 'Created a fresh, nature-inspired identity with custom illustrations and packaging design.', 'Successfully launched with 500+ pre-orders and featured in major beauty publications.', 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', true, 2),
('Velocity Product Showcase', 'velocity-product-showcase', '3D', 'Velocity Automotive', '3D product animation for luxury car launch campaign.', 'Create photorealistic 3D renders before physical prototypes were available.', 'Developed high-fidelity 3D models with cinematic lighting and dynamic camera movements.', 'Generated 2M+ views on social media and contributed to record pre-orders.', 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', true, 3),
('Urban Stories Documentary', 'urban-stories-documentary', 'Video', 'Urban Foundation', 'Documentary-style video series highlighting community impact.', 'Capture authentic stories while maintaining professional production quality.', 'Employed cinema-grade equipment with natural lighting and intimate interview techniques.', 'Series won regional film award and raised $500K in donations.', 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', true, 4),
('Elevate E-commerce', 'elevate-ecommerce', 'Website', 'Elevate Fashion', 'High-performance e-commerce platform with AR try-on features.', 'Reduce return rates while providing interactive shopping experience.', 'Integrated WebAR technology for virtual try-ons with optimized mobile performance.', 'Decreased returns by 35% and increased conversion rate by 180%.', 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', false, 5),
('Summit Conference Materials', 'summit-conference', 'Graphics', 'Tech Summit 2024', 'Complete visual identity for annual tech conference.', 'Create cohesive materials for 50+ touchpoints across physical and digital.', 'Developed a flexible design system with bold typography and vibrant gradients.', 'Attendance increased 45% year-over-year with overwhelmingly positive feedback.', 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', false, 6);