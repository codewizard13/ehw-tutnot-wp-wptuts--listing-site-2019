<link rel="stylesheet" href="css/ehd-tut-notes.css" />

# TUTORIAL NOTES

### <div class="tutorial-title">Create a Listing Website WordPress & JetEngine | Real Estate Website in WordPress Elementor (2021)</div>



<a id="top-bookmark-btn" class="bookmark-link" href="#bookmark">JUMP TO BOOKMARK</a>



## VIDEOS


### 00. Introduction

- Basics of using JetEngine to create a more dynamic WordPress website
- JetEngine, Elementor Pro

### 01. Overview

- The project creates a real estate website
- Custom fields not part of normal WP
- Categories in to nav
- Introduce to taxonomies for organizing and categorizing website

#### Plugins

- Classic Editor
- Duplicate Post
- Elementor
- Elementor Pro
- JetEngine


### 02. Terminology

- JetEngine settings in wpadmin menu
- **Post Type:** posts, pages, etc - represents real objects
- **meta fields:** title, content, feat img, etc.
- **taxonomies:** a way to organize content into groups
- We will look at post types, taxonomies, and **listings**
- We WON'T be working with metaboxes


### 03. Creating Custom Post Types

- **To create post type:** JetEngine > Post Types

!!! TIP: You can choose to work with built-in or JetEngine CPTs (custom post types) using the toggle in upper right

#### Create new CPT: 

- Click "Add New"

### 04. General Settings

- **Post Type Name:** Properties
- **Post Type Slug:** properties

### 05. Labels

- Totally optional

### Advanced Settings (08:12)

- These are the changes we need for this project:
- **Has Archive:** enable
- **Hierarchical:** enable [allows multiple levels]
- **Menu Position:** 1 [where displays on left sidebar]
- **Menu icon:** dashicons-admin-multisite
- **Supports:** title, editor, thumbnail (feat img) [built-in meta fields that our custom post can make use of]

## 06. Properties [doesn't really make sense as a timestamp - should delete]

### 07. Meta Fields

- Create first meta field: Property Price

#### Property Price

- Click "New Meta Field"
- **Label:** [human-readable] Property Price
- **Name/ID:** property-price
- **Object Type:** [what kindof field?] Field
- **Field Type:** [what type of data should user input?] Text

!!! TIP: Often works best to set Field Type for numeric values as Text

- **Description:** (optional) Notes to end user
- **Field Width:** 100%
- **Character Limit:** blank
- **Default Value:** blank
- **Is Required:** yes

#### Location 

- **Is Required:** yes

#### Gallery

- **Field Type:** Gallery [upload multiple images as same time]

### Admin Columns (14:14)

- Allows us to insert additional columns into the admin section

- Click "Add Post Type" to save all our settings

- Refresh page and click on "Properties" in the admin menu
  
!!! #GOTCHA: In the Propeties editor by default the only columns are Title and Date

#### Admin Column: Featured Image

- WPADMIN > JetEngine > Post Types > Click "Properties" in Post Type column
- Scroll to bottom and click Admin Columns > Add New
- **Title:** Featured Image
- **Type:** Select from existing callbacks > Render image tag ...
  - Set Field: thumbnail
  - Size: 100
- **Column Order:** 2

#### ADMIN Column: Property Location

- **Title:** Property Location
- **Type:** Meta Value

- Scroll up to the Location custom field and grab the field ID/Name
- **Field Name:** location
- **Column Order:** 3
- **Is Sortable:** yes

- Update Post Type 
- Go back to the properties list and you can see the new columns are there

NEXT: Creating custom taxonomies


### 08. Creating Custom Taxonomy

- Create Property Types taxonomy
- **JetEngine > Taxonomies > Add New**

**General Settings:**

- **Taxonomy Name:** Property Types
- **Post Type:** Properties

**Labels:**

- (optional)

**Advanced Settings:**

!!! #TIP: Admin Menu is also called admin bar (menu at top in wpadmin)

- **Hierarchical:** Yes

**Meta Fields:**

- Can add extra info to an archive page
- Will deal with this in a different video
- Click "Add Taxonomy" to save
- Refresh -> Now Property Types should be a submenu in wpadmin under "Properties"

---

**Property Types:**

(_Name Slug_)

- Flats flats
- Apartments apartments
- Houses houses


!!! #TIP: The "Parent Category" dropdown only shows up because we set the taxonomy as hierarchical


- Now if we add a new property, we will see the "Property Types" selector metabox on the right

#### Creating some dummy posts

- Ground Apartment, 2 para, price 350k, London, add 4 pix in gallery

- Now look at Properties list page and all our relevant info should be in the columns












### 09. Creating Template Files
### 10. Creating Single Post Template
### 11. Custom Listings
### 12. Outro



### 0. Introduction

#### 0.0 Welcome
  
- How build wp plugins w WP API
- Choosing good dev env
- Secure WP plugins
- Best Practices
- Create complete wp plugin

#### 0.1 How to use the exercise files




---
#### @@ 38:32 - STOPPED



<a id="bookmark" href="#top-bookmark-btn" title="back to top">BOOKMARK</a>
---

