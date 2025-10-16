## Footer Component

The footer component as implemented here is modular and responsive.

### Modularity

The footer is defined by the config that set in src/configs/{PROJECT}/footer.ts
Where {PROJECT} is the desired project being rendered

The footer can be divided into two major zones the upper footer and the lower footer.

The upper footer is known to be customized per project and as is the 'contact us' section.

#### Upper Footer

The upper footer is fully customizable and has a left and right component.

##### Left

The left component is intended to have 3 columns, as it is left-aligned and would not look appropriate with less than 3 columns.
More than three columns would result in the next column to tile to the next row.
It accepts an array of (3) objects which contain a title field, which will be the heading of the column, and an items array which will contain objects with text and a href link.

##### Right

The right component has 3 text fields for configuration title - description - button text. The form will be to the right of the three columns from the left and is left aligned.

#### Lower Footer

The lower footer is broken up into two vertical components and those vertical components are then split into a left and right side.

##### First vertical

The top half contains a hard-set values denoting the NCI/NIH on the left side. On the right side is a 'Contact Us' section (name is hard-set) that generates links under need, spreading horizontally, right aligned.

The only configuration required here is the contactUsLinks - an array of objects to create a tags

##### Second vertical

The bottom half contains a hard-set value of 'Follow Us' followed by generating a bunch of icon-links to the social media pages on the left
On the right we generate a bunch of government links.

The configuration required here are the social media links which also need icons to generate the images and the government links. Although these are configurable, it is not expected that these values would differ much project to project.
