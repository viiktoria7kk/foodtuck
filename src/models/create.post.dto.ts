/**
 * @openapi
 * components:
 *   schemas:
 *     CreatePostDto:
 *       type: object
 *       required:
 *         - img
 *         - title
 *         - description
 *         - text
 *         - tags
 *       properties:
 *         img:
 *           type: array
 *           items:
 *             type: string
 *           description: Links to images associated with the post.
 *           example: ["https://example.com/dish1.jpg", "https://example.com/dish2.jpg"]
 *         title:
 *           type: string
 *           description: The title of the post.
 *           example: "New Recipe: Italian Pasta with Fresh Tomatoes"
 *         description:
 *           type: string
 *           description: A brief description of the post.
 *           example: "Learn how to make the tastiest pasta with fresh Italian tomatoes."
 *         text:
 *           type: string
 *           description: Detailed description of the post.
 *           example: "This pasta recipe impresses with its simplicity and flavor. Perfect choice for a family dinner or an evening picnic."
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associated with the post.
 *           example: ["recipe", "Italian cuisine", "pasta", "tomatoes"]
 */
export class CreatePostDto {
  img: string[]
  title: string
  description: string
  text: string
  tags: string[]
}
