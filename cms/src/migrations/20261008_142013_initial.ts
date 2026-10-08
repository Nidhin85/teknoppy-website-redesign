import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_breadcrumb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"html" varchar,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_meta" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"h1_lead" varchar,
  	"h1_accent" varchar,
  	"subhead" varchar,
  	"trustline" varchar,
  	"h1_rest" varchar,
  	"eyebrow" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"html" varchar,
  	"answers" varchar,
  	"link_text" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"columns" numeric,
  	"badge" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"layout" varchar,
  	"draft" boolean,
  	"item_heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"badge" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_bullets_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_bullets_outro" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"html" varchar
  );
  
  CREATE TABLE "pages_blocks_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"badge" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_prose_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html" varchar,
  	"text" varchar,
  	"lead" varchar
  );
  
  CREATE TABLE "pages_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"badge" varchar,
  	"intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_links_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"badge" varchar,
  	"intro" varchar,
  	"intro_html" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar,
  	"a_html" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"center" boolean,
  	"badge" varchar,
  	"h2" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"html" varchar,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"center" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_byline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_form_fields_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_form_form_fields" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"label" varchar,
  	"type" varchar,
  	"required" boolean,
  	"placeholder" varchar,
  	"autocomplete" varchar,
  	"width" varchar,
  	"rows" numeric,
  	"hint" varchar
  );
  
  CREATE TABLE "pages_blocks_form_aside_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"bg" varchar,
  	"badge" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"form_heading" varchar,
  	"form_submit_label" varchar,
  	"form_source" varchar,
  	"form_summary" varchar,
  	"form_success_message" varchar,
  	"form_error_message" varchar,
  	"form_note" varchar,
  	"aside_heading" varchar,
  	"aside_phone" varchar,
  	"aside_phone_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_nap_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_nap" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stat_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"badge" varchar,
  	"h2" varchar,
  	"items" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"src" varchar,
  	"url" varchar,
  	"alt" varchar,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_link_groups_groups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar,
  	"href" varchar,
  	"image" varchar,
  	"image_alt" varchar,
  	"image_fallback" varchar
  );
  
  CREATE TABLE "pages_blocks_link_groups_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_link_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"badge" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_posts_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"view_all_label" varchar,
  	"view_all_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_projects_exclude" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"note" varchar,
  	"intro" varchar,
  	"badge" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_case_studies_items_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_case_studies_items_approach" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_case_studies_items_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_case_studies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"links" varchar
  );
  
  CREATE TABLE "pages_blocks_case_studies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"contact" varchar,
  	"photo" varchar,
  	"photo_alt" varchar,
  	"bio" varchar,
  	"reviewed" varchar
  );
  
  CREATE TABLE "pages_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" varchar,
  	"h2" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_calculator_step_labels_c86f3c" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_tiers_c738f4" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"label" varchar,
  	"detail" varchar,
  	"min" numeric,
  	"max" numeric,
  	"open_ended" boolean
  );
  
  CREATE TABLE "pages_blocks_calculator_calculator_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"label" varchar,
  	"blurb" varchar
  );
  
  CREATE TABLE "pages_blocks_calculator_calculator_addons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"label" varchar,
  	"text" varchar,
  	"min" jsonb,
  	"max" jsonb
  );
  
  CREATE TABLE "pages_blocks_calculator_calculator_included" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_blocks_calculator" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"bg" varchar,
  	"badge" varchar,
  	"h2" varchar,
  	"intro" varchar,
  	"calculator_quote_label" varchar,
  	"calculator_quote_href" varchar,
  	"calculator_call_label" varchar,
  	"calculator_call_href" varchar,
  	"calculator_email_subject" varchar,
  	"calculator_note" varchar,
  	"calculator_complex_note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_dev_notes_held_placeholders" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_open_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_changes_from_source" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_before_publishing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_schema_emitted" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_on_page_checklist" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_do_not_change_without_s_e_o" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_schema_required" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_images_required" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_data_needed_before_launch" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages_dev_notes_priority_fixes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"dev_notes_source" varchar,
  	"dev_notes_primary_keyword" varchar,
  	"dev_notes_permalink" varchar,
  	"dev_notes_schema" jsonb,
  	"dev_notes_byline_email" varchar,
  	"dev_notes_keyword" varchar,
  	"dev_notes_not_rendered" varchar,
  	"dev_notes_held_copy" varchar,
  	"dev_notes_form_note" varchar,
  	"dev_notes_operational_claims" varchar,
  	"dev_notes_copy_note" varchar,
  	"dev_notes_trustline_note" varchar,
  	"dev_notes_redirect_note" varchar,
  	"dev_notes_secondary_keyword" varchar,
  	"dev_notes_word_count" varchar,
  	"dev_notes_keyword_density" varchar,
  	"dev_notes_corrections_applied" varchar,
  	"dev_notes_internal_links" jsonb,
  	"dev_notes_image_alt_text" varchar,
  	"dev_notes_cannibalization_check" varchar,
  	"dev_notes_hero_image" varchar,
  	"dev_notes_before_teknoppy_disclaimer" varchar,
  	"dev_notes_visual_showcase" varchar,
  	"dev_notes_results" varchar,
  	"dev_notes_client_testimonial" varchar,
  	"dev_notes_url_note" varchar,
  	"dev_notes_redesign2026_08_21" varchar,
  	"dev_notes_screenshot" varchar,
  	"dev_notes_pending_links" varchar,
  	"dev_notes_assumptions" varchar,
  	"dev_notes_faq_note" varchar,
  	"dev_notes_url" varchar,
  	"dev_notes_meta_title_length" varchar,
  	"dev_notes_meta_description_length" varchar,
  	"dev_notes_blocker" varchar,
  	"dev_notes_copy_note_not_rendered" varchar,
  	"dev_notes_added_section" varchar,
  	"dev_notes_screenshots" varchar,
  	"dev_notes_drafted_sections" varchar,
  	"dev_notes_stats_conflict" varchar,
  	"dev_notes_section_note" varchar,
  	"dev_notes_link_note" varchar,
  	"dev_notes_author_line" varchar,
  	"dev_notes_insights_note" varchar,
  	"dev_notes_pricing_source" varchar,
  	"dev_notes_meta_layer_not_supplied" varchar,
  	"dev_notes_permalink_note" varchar,
  	"dev_notes_breadcrumb_conflict" varchar,
  	"dev_notes_orphan_fix" varchar,
  	"dev_notes_featured_work_placeholder" varchar,
  	"dev_notes_origin" varchar,
  	"dev_notes_card_source" varchar,
  	"dev_notes_role_split" varchar,
  	"dev_notes_h1_note" varchar,
  	"dev_notes_unverified_stat" varchar,
  	"dev_notes_email_note" varchar,
  	"dev_notes_redirect_removed" varchar,
  	"dev_notes_inbound_links" varchar,
  	"dev_notes_pricing_note" varchar,
  	"dev_notes_secondary_keywords" varchar,
  	"dev_notes_pending_copy" varchar,
  	"dev_notes_schema_stack" varchar,
  	"dev_notes_url_discrepancy" varchar,
  	"dev_notes_child_pages" varchar,
  	"dev_notes_aggregate_rating" varchar,
  	"dev_notes_pending_pages" varchar,
  	"dev_notes_geo_meta" varchar,
  	"dev_notes_cannibalization" varchar,
  	"dev_notes_breadcrumb" varchar,
  	"dev_notes_source_typo" varchar,
  	"dev_notes_pricing_deviation" varchar,
  	"dev_notes_pricing_mapping" varchar,
  	"dev_notes_title_note" varchar,
  	"dev_notes_pricing_provenance" varchar,
  	"dev_notes_addon_pricing" varchar,
  	"dev_notes_per_page_cost" varchar,
  	"dev_notes_email_estimate" varchar,
  	"dev_notes_schema_note" varchar,
  	"schema" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "case_studies_hero_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies_at_a_glance" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies_about_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies_challenges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "case_studies_objectives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies_approach_pillars_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies_approach_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "case_studies_deliverables" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "case_studies_why_matters_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "case_studies_ranking_keywords_groups_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"page" varchar,
  	"position" varchar,
  	"map" varchar,
  	"ai" varchar
  );
  
  CREATE TABLE "case_studies_ranking_keywords_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"badge" varchar,
  	"has_map" boolean,
  	"note" varchar,
  	"has_ai" boolean
  );
  
  CREATE TABLE "case_studies_impact_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"canonical_u_r_l" varchar,
  	"hero_image" varchar,
  	"hero_image_alt" varchar,
  	"schema_type" varchar,
  	"schema_about_type" varchar,
  	"schema_about_name" varchar,
  	"schema_about_address_locality" varchar,
  	"schema_about_address_region" varchar,
  	"schema_about_address_country" varchar,
  	"schema_about_address_street_address" varchar,
  	"schema_about_address_postal_code" varchar,
  	"schema_about_url" varchar,
  	"client_name" varchar,
  	"category_tag" varchar,
  	"tag_badge" varchar,
  	"title" varchar,
  	"story_lead" varchar,
  	"industry" varchar,
  	"location" varchar,
  	"services" varchar,
  	"platform" varchar,
  	"live_website" varchar,
  	"live_website_url" varchar,
  	"about_heading" varchar,
  	"challenge_lead" varchar,
  	"objective_lead" varchar,
  	"approach_lead" varchar,
  	"why_matters_heading" varchar,
  	"why_matters_callout_html" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"cta_headline" varchar,
  	"cta_phone_text" varchar,
  	"cta_phone_tel" varchar,
  	"cta_tagline" varchar,
  	"ranking_keywords_lead" varchar,
  	"deliverable_lead" varchar,
  	"impact_lead" varchar,
  	"approach" varchar,
  	"deliverables_lead" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"date" timestamp(3) with time zone,
  	"read_time" varchar,
  	"cover" varchar,
  	"draft" boolean,
  	"body" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "portfolio" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"name" varchar,
  	"location" varchar,
  	"industry" varchar,
  	"description" varchar,
  	"result" varchar,
  	"order" numeric,
  	"body" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"quote" varchar,
  	"initials" varchar,
  	"photo" varchar,
  	"order" numeric,
  	"body" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"enable_a_p_i_key" boolean,
  	"api_key" varchar,
  	"api_key_index" varchar,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"case_studies_id" integer,
  	"posts_id" integer,
  	"portfolio_id" integer,
  	"testimonials_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_hero_trust_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "home_about_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "home_about_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"suffix" varchar,
  	"label" varchar,
  	"sublabel" varchar
  );
  
  CREATE TABLE "home_services_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "home_why_choose_us_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "home_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_h1_lead" varchar,
  	"hero_h1_accent" varchar,
  	"hero_subheadline_pre" varchar,
  	"hero_subheadline_a1" varchar,
  	"hero_subheadline_mid1" varchar,
  	"hero_subheadline_a2" varchar,
  	"hero_subheadline_mid2" varchar,
  	"hero_subheadline_a3" varchar,
  	"hero_subheadline_post" varchar,
  	"hero_body" varchar,
  	"hero_body_more" varchar,
  	"hero_read_more_label" varchar,
  	"hero_read_less_label" varchar,
  	"hero_primary_cta_label" varchar,
  	"hero_primary_cta_href" varchar,
  	"hero_secondary_cta_label" varchar,
  	"hero_secondary_cta_href" varchar,
  	"about_badge" varchar,
  	"about_heading_accent" varchar,
  	"about_heading_rest" varchar,
  	"about_intro" varchar,
  	"services_badge" varchar,
  	"services_heading_lead" varchar,
  	"services_heading_accent1" varchar,
  	"services_heading_mid" varchar,
  	"services_heading_accent2" varchar,
  	"services_heading_rest" varchar,
  	"services_intro" varchar,
  	"why_choose_us_badge" varchar,
  	"why_choose_us_heading_lead" varchar,
  	"why_choose_us_heading_accent" varchar,
  	"why_choose_us_heading_rest" varchar,
  	"why_choose_us_intro" varchar,
  	"faq_badge" varchar,
  	"faq_heading_lead" varchar,
  	"faq_heading_accent" varchar,
  	"faq_intro" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"business_name" varchar,
  	"phone" varchar,
  	"phone_link" varchar,
  	"whatsapp" varchar,
  	"u_whatsappmessagenote" varchar,
  	"whatsapp_message" varchar,
  	"whatsapp_cta_label" varchar,
  	"email" varchar,
  	"address" varchar,
  	"address_short" varchar,
  	"founder_name" varchar,
  	"founder_role" varchar,
  	"established" varchar,
  	"default_contact_name" varchar,
  	"default_contact_role" varchar,
  	"default_contact_image" varchar,
  	"default_contact_bio" varchar,
  	"u_statsnote" varchar,
  	"stats_projects" varchar,
  	"stats_clients" varchar,
  	"stats_years_in_business" varchar,
  	"stats_industries" varchar,
  	"u_socialnote" varchar,
  	"social_twitter" varchar,
  	"social_linkedin" varchar,
  	"social_instagram" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"service_areas" varchar,
  	"legal" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "clients_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"src" varchar
  );
  
  CREATE TABLE "clients" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"u_note" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "video_testimonials_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"youtube_id" varchar,
  	"name" varchar,
  	"role" varchar,
  	"thumb" varchar,
  	"is_short" boolean,
  	"name_source" varchar
  );
  
  CREATE TABLE "video_testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"dev_notes_origin" varchar,
  	"dev_notes_identification" varchar,
  	"dev_notes_embed" varchar,
  	"dev_notes_text_testimonials_kept" varchar,
  	"dev_notes_order" varchar,
  	"dev_notes_lenaa_history" varchar,
  	"dev_notes_shorts" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "life_at_teknoppy_life_entries_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "life_at_teknoppy_life_entries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"date" varchar,
  	"formatted_date" varchar,
  	"title" varchar,
  	"category" varchar,
  	"type" varchar,
  	"media_url" varchar,
  	"thumbnail_url" varchar,
  	"youtube_id" varchar,
  	"aspect" varchar,
  	"description" varchar,
  	"person" varchar,
  	"client" varchar,
  	"project" varchar,
  	"featured" boolean,
  	"is_new" boolean
  );
  
  CREATE TABLE "life_at_teknoppy_daily_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"time" varchar,
  	"period" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"image" varchar,
  	"tag" varchar,
  	"location" varchar
  );
  
  CREATE TABLE "life_at_teknoppy_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"name" varchar,
  	"role" varchar,
  	"department" varchar,
  	"photo" varchar,
  	"photo_fallback" varchar,
  	"bio" varchar,
  	"specialty" varchar
  );
  
  CREATE TABLE "life_deliverables_197e30" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "life_at_teknoppy_project_workflow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"image" varchar
  );
  
  CREATE TABLE "life_at_teknoppy_active_builds" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"client" varchar,
  	"project_type" varchar,
  	"stage" varchar,
  	"progress_percent" numeric,
  	"lead" varchar,
  	"badge" varchar,
  	"accent" varchar
  );
  
  CREATE TABLE "life_at_teknoppy_client_moments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"client_name" varchar,
  	"organization" varchar,
  	"role" varchar,
  	"image" varchar,
  	"location" varchar,
  	"highlight" varchar,
  	"project_ref" varchar,
  	"youtube_id" varchar
  );
  
  CREATE TABLE "life_at_teknoppy_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"numeric_value" numeric,
  	"suffix" varchar,
  	"label" varchar,
  	"sublabel" varchar,
  	"icon_name" varchar
  );
  
  CREATE TABLE "life_at_teknoppy_culture_moments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"caption" varchar,
  	"subtext" varchar,
  	"image" varchar,
  	"rotation" varchar,
  	"tag" varchar
  );
  
  CREATE TABLE "life_at_teknoppy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "case_studies_index_filter_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"label" varchar,
  	"slug" varchar
  );
  
  CREATE TABLE "case_categories_a87ab5" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "case_studies_index_case_studies_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"title" varchar,
  	"client" varchar,
  	"category" varchar,
  	"description" varchar,
  	"image" varchar,
  	"image_alt" varchar,
  	"href" varchar,
  	"location" varchar,
  	"tag" varchar,
  	"featured" boolean
  );
  
  CREATE TABLE "case_studies_index_case_study_f_a_qs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "case_studies_index" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "website_portfolio_portfolio_filter_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"label" varchar,
  	"slug" varchar
  );
  
  CREATE TABLE "website_categories_fcd2fa" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "website_portfolio_website_portfolio_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"html_id" varchar,
  	"name" varchar,
  	"tagline" varchar,
  	"industry_label" varchar,
  	"category" varchar,
  	"image" varchar,
  	"image_alt" varchar,
  	"href" varchar,
  	"location" varchar
  );
  
  CREATE TABLE "website_portfolio" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_page_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"photo" varchar,
  	"photo_alt" varchar,
  	"bio" varchar
  );
  
  CREATE TABLE "about_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar,
  	"a_html" varchar,
  	"source" varchar
  );
  
  CREATE TABLE "about_page_dev_notes_team_data_needed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "about_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"team_badge" varchar,
  	"team_heading" varchar,
  	"team_heading_accent" varchar,
  	"team_founder_name" varchar,
  	"team_founder_role" varchar,
  	"team_founder_email" varchar,
  	"team_founder_phone" varchar,
  	"team_founder_photo" varchar,
  	"team_founder_photo_fallback" varchar,
  	"team_founder_photo_alt" varchar,
  	"team_founder_bio" varchar,
  	"team_members_heading" varchar,
  	"faq_badge" varchar,
  	"faq_heading" varchar,
  	"faq_intro" varchar,
  	"dev_notes_origin" varchar,
  	"dev_notes_duplicate_content_risk" varchar,
  	"dev_notes_schema_decision" varchar,
  	"dev_notes_pending" varchar,
  	"dev_notes_team_section" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "blog_page_categories_items_match" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "blog_page_categories_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"href" varchar,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"service_label" varchar,
  	"service_href" varchar
  );
  
  CREATE TABLE "blog_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "blog_dev_notes_content_rules__8e6a2a" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "blog_page_dev_notes_open_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "blog_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_h1_lead" varchar,
  	"hero_h1_accent" varchar,
  	"hero_intro" varchar,
  	"hero_trustline_html" varchar,
  	"categories_intro" varchar,
  	"categories_other_heading" varchar,
  	"categories_empty_text" varchar,
  	"latest_heading" varchar,
  	"latest_intro" varchar,
  	"faq_heading" varchar,
  	"cta_text" varchar,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"dev_notes_source" varchar,
  	"dev_notes_primary_keyword" varchar,
  	"dev_notes_word_count" varchar,
  	"dev_notes_url" varchar,
  	"dev_notes_pending_pages" varchar,
  	"dev_notes_schema" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "certifications_page_ratings_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" varchar,
  	"rating" varchar,
  	"review_count" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "certifications_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar,
  	"a_html" varchar
  );
  
  CREATE TABLE "certifications_page_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "certificatio_dev_notes_data_needed_be_9e1fda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "certificatio_dev_notes_content_rules__e74486" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "certifications_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_h1_lead" varchar,
  	"hero_h1_accent" varchar,
  	"hero_intro" varchar,
  	"hero_verified_line" varchar,
  	"certifications_heading" varchar,
  	"certifications_intro" varchar,
  	"certifications_items" jsonb,
  	"ratings_heading" varchar,
  	"ratings_intro" varchar,
  	"testimonials_heading" varchar,
  	"testimonials_intro" varchar,
  	"testimonials_items" jsonb,
  	"why_this_matters_heading" varchar,
  	"why_this_matters_html" varchar,
  	"faq_heading" varchar,
  	"cta_html" varchar,
  	"cta_leadership_html" varchar,
  	"dev_notes_source" varchar,
  	"dev_notes_primary_keyword" varchar,
  	"dev_notes_word_count" varchar,
  	"dev_notes_publishing_rule" varchar,
  	"dev_notes_schema_behaviour" varchar,
  	"dev_notes_herointrorewrite2026_09_04" varchar,
  	"dev_notes_hero_intro_original" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "clients_page_breadcrumb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "clients_page_hero_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "clients_page_sectors_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "clients_page_links_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "clients_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "clients_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_h1_lead" varchar,
  	"hero_h1_accent" varchar,
  	"wall_heading" varchar,
  	"wall_intro" varchar,
  	"sectors_heading" varchar,
  	"sectors_intro" varchar,
  	"testimonials_heading" varchar,
  	"testimonials_intro" varchar,
  	"projects_heading" varchar,
  	"projects_intro" varchar,
  	"links_heading" varchar,
  	"faq_heading" varchar,
  	"cta_heading" varchar,
  	"cta_text" varchar,
  	"cta_primary_label" varchar,
  	"cta_primary_href" varchar,
  	"cta_secondary_label" varchar,
  	"cta_secondary_href" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_page_reach_us_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"href" varchar,
  	"icon" varchar
  );
  
  CREATE TABLE "contact_page_form_service_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "contact_page_after_submit_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"html" varchar
  );
  
  CREATE TABLE "contact_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "contact_page_closing_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "contact_page_dev_notes_requires_client_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_h1_lead" varchar,
  	"hero_h1_accent" varchar,
  	"hero_intro" varchar,
  	"reach_us_heading" varchar,
  	"reach_us_whatsapp_label" varchar,
  	"map_title" varchar,
  	"map_query" varchar,
  	"form_heading" varchar,
  	"form_submit_label" varchar,
  	"form_success_message" varchar,
  	"form_error_message" varchar,
  	"where_we_work_heading" varchar,
  	"where_we_work_html" varchar,
  	"after_submit_heading" varchar,
  	"faq_heading" varchar,
  	"faq_footnote_html" varchar,
  	"dev_notes_source" varchar,
  	"dev_notes_nap_conflict" varchar,
  	"dev_notes_brand_colour_conflict" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "leadership_page_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "leadership_page_connect_related_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "leadership_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "leadership_dev_notes_data_needed_be_751e51" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "leadership_dev_notes_content_rules__781afc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "leadership_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_name" varchar,
  	"hero_role" varchar,
  	"hero_photo" varchar,
  	"hero_photo_alt" varchar,
  	"hero_intro" varchar,
  	"hero_reviewed_line" varchar,
  	"connect_heading" varchar,
  	"connect_linkedin_url" varchar,
  	"connect_personal_website_url" varchar,
  	"connect_html" varchar,
  	"faq_heading" varchar,
  	"cta_text" varchar,
  	"cta_label" varchar,
  	"cta_href" varchar,
  	"dev_notes_source" varchar,
  	"dev_notes_primary_keyword" varchar,
  	"dev_notes_word_count" varchar,
  	"dev_notes_schema_notes" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "web_design_page_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "web_design_page_intro_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "web_design_page_why_teknoppy_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "web_design_page_services_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "web_design_page_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "web_design_page_pricing_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "web_design_page_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "web_design_page_case_studies_blocks_approach" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "web_design_page_case_studies_blocks_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "web_design_page_case_studies_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"metric" varchar,
  	"metric_sub" varchar,
  	"title" varchar,
  	"intro" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"accent" varchar,
  	"image" varchar,
  	"site" varchar,
  	"image_alt" varchar,
  	"video_url" varchar,
  	"case_study_href" varchar
  );
  
  CREATE TABLE "web_design_page_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar
  );
  
  CREATE TABLE "web_design_page_projects_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"loc" varchar,
  	"desc" varchar,
  	"result" varchar
  );
  
  CREATE TABLE "web_design_page_faqs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "web_design_page_blog_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slug" varchar
  );
  
  CREATE TABLE "web_design_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_heading_lead" varchar,
  	"hero_heading_accent" varchar,
  	"hero_heading_rest" varchar,
  	"hero_body" varchar,
  	"hero_cta_primary_label" varchar,
  	"hero_cta_primary_href" varchar,
  	"hero_cta_secondary_label" varchar,
  	"hero_cta_secondary_href" varchar,
  	"why_teknoppy_badge" varchar,
  	"why_teknoppy_heading_lead" varchar,
  	"why_teknoppy_heading_accent" varchar,
  	"why_teknoppy_intro" varchar,
  	"services_badge" varchar,
  	"services_heading_lead" varchar,
  	"services_heading_accent" varchar,
  	"services_heading_rest" varchar,
  	"services_intro" varchar,
  	"process_badge" varchar,
  	"process_heading_lead" varchar,
  	"process_heading_accent" varchar,
  	"process_heading_rest" varchar,
  	"process_intro" varchar,
  	"pricing_badge" varchar,
  	"pricing_heading_lead" varchar,
  	"pricing_heading_accent" varchar,
  	"pricing_intro" varchar,
  	"pricing_footnote" varchar,
  	"industries_badge" varchar,
  	"industries_heading_accent" varchar,
  	"industries_heading_rest" varchar,
  	"industries_intro" varchar,
  	"case_studies_badge" varchar,
  	"case_studies_heading_lead" varchar,
  	"case_studies_heading_accent" varchar,
  	"case_studies_heading_rest" varchar,
  	"case_studies_intro" varchar,
  	"testimonials_badge" varchar,
  	"testimonials_heading_lead" varchar,
  	"testimonials_heading_accent" varchar,
  	"testimonials_heading_rest" varchar,
  	"testimonials_intro" varchar,
  	"projects_badge" varchar,
  	"projects_heading_lead" varchar,
  	"projects_heading_accent" varchar,
  	"projects_heading_rest" varchar,
  	"projects_intro" varchar,
  	"projects_all_link_label" varchar,
  	"projects_all_link_href" varchar,
  	"faqs_badge" varchar,
  	"faqs_heading_lead" varchar,
  	"faqs_heading_accent" varchar,
  	"faqs_intro" varchar,
  	"blog_badge" varchar,
  	"blog_heading_lead" varchar,
  	"blog_heading_accent" varchar,
  	"blog_heading_rest" varchar,
  	"blog_all_link_label" varchar,
  	"blog_all_link_href" varchar,
  	"author_badge" varchar,
  	"author_heading_lead" varchar,
  	"author_heading_accent" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_email" varchar,
  	"author_phone" varchar,
  	"author_bio" varchar,
  	"author_reviewed" varchar,
  	"author_profile_href" varchar,
  	"dev_notes_source_doc" varchar,
  	"dev_notes_name_note" varchar,
  	"dev_notes_link_note" varchar,
  	"dev_notes_cta_note" varchar,
  	"dev_notes_metric_note" varchar,
  	"dev_notes_seo_audit" varchar,
  	"dev_notes_schema_note" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "wordpress_page_hero_stat_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "wordpress_page_intro_band_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "wordpress_page_why_teknoppy_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "wordpress_page_services_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "wordpress_page_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "wordpress_page_pricing_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "wordpress_page_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "wordpress_page_case_studies_blocks_approach" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "wordpress_page_case_studies_blocks_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "wordpress_page_case_studies_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"tag" varchar,
  	"metric" varchar,
  	"metric_sub" varchar,
  	"title" varchar,
  	"intro" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"accent" varchar,
  	"image" varchar,
  	"site" varchar,
  	"image_alt" varchar
  );
  
  CREATE TABLE "wordpress_page_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar
  );
  
  CREATE TABLE "wordpress_page_projects_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"loc" varchar,
  	"desc" varchar,
  	"result" varchar
  );
  
  CREATE TABLE "wordpress_page_faqs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "wordpress_page_blog_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slug" varchar
  );
  
  CREATE TABLE "wordpress_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_heading_highlight" varchar,
  	"hero_heading_after" varchar,
  	"hero_body" varchar,
  	"hero_cta_primary_label" varchar,
  	"hero_cta_primary_href" varchar,
  	"hero_cta_secondary_label" varchar,
  	"hero_cta_secondary_href" varchar,
  	"why_teknoppy_badge" varchar,
  	"why_teknoppy_heading_before" varchar,
  	"why_teknoppy_heading_highlight" varchar,
  	"why_teknoppy_intro" varchar,
  	"services_badge" varchar,
  	"services_heading_before" varchar,
  	"services_heading_highlight" varchar,
  	"services_heading_after" varchar,
  	"services_intro" varchar,
  	"process_badge" varchar,
  	"process_heading_before" varchar,
  	"process_heading_highlight" varchar,
  	"process_heading_after" varchar,
  	"process_intro" varchar,
  	"pricing_badge" varchar,
  	"pricing_heading_before" varchar,
  	"pricing_heading_highlight" varchar,
  	"pricing_intro" varchar,
  	"pricing_table_head_type" varchar,
  	"pricing_table_head_price" varchar,
  	"pricing_footnote" varchar,
  	"industries_badge" varchar,
  	"industries_heading_highlight" varchar,
  	"industries_heading_after" varchar,
  	"industries_intro" varchar,
  	"case_studies_badge" varchar,
  	"case_studies_heading_before" varchar,
  	"case_studies_heading_highlight" varchar,
  	"case_studies_heading_after" varchar,
  	"case_studies_intro" varchar,
  	"testimonials_badge" varchar,
  	"testimonials_heading_before" varchar,
  	"testimonials_heading_highlight" varchar,
  	"testimonials_heading_after" varchar,
  	"testimonials_intro" varchar,
  	"projects_badge" varchar,
  	"projects_heading_before" varchar,
  	"projects_heading_highlight" varchar,
  	"projects_heading_after" varchar,
  	"projects_intro" varchar,
  	"faqs_badge" varchar,
  	"faqs_heading_before" varchar,
  	"faqs_heading_highlight" varchar,
  	"faqs_intro" varchar,
  	"blog_badge" varchar,
  	"blog_heading_lead" varchar,
  	"blog_heading_accent" varchar,
  	"blog_heading_rest" varchar,
  	"blog_all_link_label" varchar,
  	"blog_all_link_href" varchar,
  	"author_badge" varchar,
  	"author_heading_lead" varchar,
  	"author_heading_accent" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_email" varchar,
  	"author_phone" varchar,
  	"author_bio" varchar,
  	"author_reviewed" varchar,
  	"author_profile_href" varchar,
  	"dev_notes_source_doc" varchar,
  	"dev_notes_blog_note" varchar,
  	"dev_notes_link_note" varchar,
  	"dev_notes_author_note" varchar,
  	"dev_notes_schema_note" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "ecommerce_page_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "ecommerce_page_why_teknoppy_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "ecommerce_page_services_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "ecommerce_page_platforms_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"desc" varchar,
  	"best_for" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "ecommerce_page_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "ecommerce_page_pricing_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "ecommerce_page_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "ecommerce_page_case_studies_blocks_approach" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "ecommerce_page_case_studies_blocks_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "ecommerce_page_case_studies_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"tag" varchar,
  	"title" varchar,
  	"intro" varchar,
  	"image" varchar,
  	"image_alt" varchar,
  	"href" varchar,
  	"site" varchar,
  	"approach_label" varchar,
  	"results_label" varchar,
  	"accent" varchar
  );
  
  CREATE TABLE "ecommerce_page_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar
  );
  
  CREATE TABLE "ecommerce_page_projects_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"loc" varchar,
  	"desc" varchar,
  	"result" varchar,
  	"href" varchar,
  	"site" varchar
  );
  
  CREATE TABLE "ecommerce_page_blog_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slug" varchar
  );
  
  CREATE TABLE "ecommerce_page_faqs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "ecommerce_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_heading_accent" varchar,
  	"hero_heading_mid" varchar,
  	"hero_heading_rest" varchar,
  	"hero_subheadline" varchar,
  	"hero_body" varchar,
  	"hero_cta_primary_label" varchar,
  	"hero_cta_primary_href" varchar,
  	"hero_cta_secondary_label" varchar,
  	"hero_cta_secondary_href" varchar,
  	"intro_band" varchar,
  	"why_teknoppy_badge" varchar,
  	"why_teknoppy_heading_lead" varchar,
  	"why_teknoppy_heading_accent" varchar,
  	"why_teknoppy_intro" varchar,
  	"services_badge" varchar,
  	"services_heading_lead" varchar,
  	"services_heading_accent" varchar,
  	"services_heading_rest" varchar,
  	"services_intro" varchar,
  	"platforms_badge" varchar,
  	"platforms_heading_lead" varchar,
  	"platforms_heading_accent" varchar,
  	"platforms_heading_rest" varchar,
  	"platforms_intro" varchar,
  	"platforms_footnote" varchar,
  	"platforms_footnote_link_label" varchar,
  	"platforms_footnote_link_href" varchar,
  	"process_badge" varchar,
  	"process_heading_lead" varchar,
  	"process_heading_accent" varchar,
  	"process_heading_rest" varchar,
  	"process_intro" varchar,
  	"pricing_badge" varchar,
  	"pricing_heading_lead" varchar,
  	"pricing_heading_accent" varchar,
  	"pricing_intro" varchar,
  	"pricing_footnote" varchar,
  	"industries_badge" varchar,
  	"industries_heading_accent" varchar,
  	"industries_heading_rest" varchar,
  	"industries_intro" varchar,
  	"case_studies_badge" varchar,
  	"case_studies_heading_lead" varchar,
  	"case_studies_heading_accent" varchar,
  	"case_studies_heading_rest" varchar,
  	"case_studies_intro" varchar,
  	"case_studies_view_all_label" varchar,
  	"case_studies_view_all_href" varchar,
  	"testimonials_badge" varchar,
  	"testimonials_heading_lead" varchar,
  	"testimonials_heading_accent" varchar,
  	"testimonials_heading_rest" varchar,
  	"testimonials_intro" varchar,
  	"projects_badge" varchar,
  	"projects_heading_lead" varchar,
  	"projects_heading_accent" varchar,
  	"projects_heading_rest" varchar,
  	"projects_intro" varchar,
  	"blog_badge" varchar,
  	"blog_heading_lead" varchar,
  	"blog_heading_accent" varchar,
  	"blog_heading_rest" varchar,
  	"blog_intro" varchar,
  	"blog_all_link_label" varchar,
  	"blog_all_link_href" varchar,
  	"faqs_badge" varchar,
  	"faqs_heading_lead" varchar,
  	"faqs_heading_accent" varchar,
  	"faqs_intro" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "web_application_page_hero_stat_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "web_application_page_why_teknoppy_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "web_application_page_services_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "web_application_page_sub_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "web_application_page_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "web_application_page_pricing_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"price" varchar,
  	"timeline" varchar
  );
  
  CREATE TABLE "web_application_page_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "web_featured_case_studies_it_f291a3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"client" varchar,
  	"sector" varchar,
  	"title" varchar,
  	"text" varchar,
  	"stack" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "web_approach_1d400f" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "web_results_b13110" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "web_application_page_case_studies_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"metric" varchar,
  	"metric_sub" varchar,
  	"title" varchar,
  	"intro" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"accent" varchar
  );
  
  CREATE TABLE "web_application_page_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar
  );
  
  CREATE TABLE "web_application_page_projects_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"loc" varchar,
  	"desc" varchar,
  	"result" varchar
  );
  
  CREATE TABLE "web_application_page_faqs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "web_application_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_heading_pre" varchar,
  	"hero_heading_highlight" varchar,
  	"hero_heading_post" varchar,
  	"hero_subheadline" varchar,
  	"hero_body" varchar,
  	"hero_cta_primary_label" varchar,
  	"hero_cta_primary_href" varchar,
  	"hero_cta_secondary_label" varchar,
  	"hero_cta_secondary_href" varchar,
  	"intro_band" varchar,
  	"why_teknoppy_badge" varchar,
  	"why_teknoppy_heading_pre" varchar,
  	"why_teknoppy_heading_highlight" varchar,
  	"why_teknoppy_intro" varchar,
  	"services_badge" varchar,
  	"services_heading_pre" varchar,
  	"services_heading_highlight" varchar,
  	"services_heading_post" varchar,
  	"services_intro" varchar,
  	"sub_services_badge" varchar,
  	"sub_services_heading" varchar,
  	"sub_services_intro" varchar,
  	"process_badge" varchar,
  	"process_heading_pre" varchar,
  	"process_heading_highlight" varchar,
  	"process_heading_post" varchar,
  	"process_intro" varchar,
  	"pricing_badge" varchar,
  	"pricing_heading_pre" varchar,
  	"pricing_heading_highlight" varchar,
  	"pricing_intro" varchar,
  	"pricing_footnote" varchar,
  	"industries_badge" varchar,
  	"industries_heading_highlight" varchar,
  	"industries_heading_post" varchar,
  	"industries_intro" varchar,
  	"featured_case_studies_badge" varchar,
  	"featured_case_studies_heading_pre" varchar,
  	"featured_case_studies_heading_highlight" varchar,
  	"featured_case_studies_heading_post" varchar,
  	"featured_case_studies_intro" varchar,
  	"featured_case_studies_view_all_label" varchar,
  	"featured_case_studies_view_all_href" varchar,
  	"blog_badge" varchar,
  	"blog_heading_pre" varchar,
  	"blog_heading_highlight" varchar,
  	"blog_heading_post" varchar,
  	"blog_intro" varchar,
  	"blog_view_all_label" varchar,
  	"blog_view_all_href" varchar,
  	"blog_fallback_note" varchar,
  	"case_studies_draft" boolean,
  	"case_studies_draft_reason" varchar,
  	"case_studies_heading_pre" varchar,
  	"case_studies_heading_highlight" varchar,
  	"case_studies_heading_post" varchar,
  	"case_studies_intro" varchar,
  	"testimonials_draft" boolean,
  	"testimonials_draft_reason" varchar,
  	"testimonials_heading_pre" varchar,
  	"testimonials_heading_highlight" varchar,
  	"testimonials_heading_post" varchar,
  	"testimonials_intro" varchar,
  	"projects_draft" boolean,
  	"projects_draft_reason" varchar,
  	"projects_heading_pre" varchar,
  	"projects_heading_highlight" varchar,
  	"projects_heading_post" varchar,
  	"projects_intro" varchar,
  	"faqs_heading_pre" varchar,
  	"faqs_heading_highlight" varchar,
  	"faqs_intro" varchar,
  	"dev_notes_card_link_note" varchar,
  	"dev_notes_featured_case_studies_note" varchar,
  	"dev_notes_blog_note" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "digital_marketing_page_hero_stat_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "digital_marketing_page_why_teknoppy_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "digital_marketing_page_services_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "digital_marketing_page_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "digital_marketing_page_pricing_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "digital_marketing_page_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "digital_approach_fdc92e" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "digital_results_5bf77a" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_value" varchar
  );
  
  CREATE TABLE "digital_marketing_page_case_studies_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"metric" varchar,
  	"metric_sub" varchar,
  	"title" varchar,
  	"intro" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"accent" varchar,
  	"image" varchar,
  	"site" varchar,
  	"image_alt" varchar
  );
  
  CREATE TABLE "digital_marketing_page_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar
  );
  
  CREATE TABLE "digital_marketing_page_projects_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"loc" varchar,
  	"desc" varchar,
  	"result" varchar
  );
  
  CREATE TABLE "digital_marketing_page_insights_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "digital_marketing_page_faqs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar,
  	"a" varchar
  );
  
  CREATE TABLE "digital_marketing_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"hero_badge" varchar,
  	"hero_heading_lead" varchar,
  	"hero_heading_highlight" varchar,
  	"hero_heading_tail" varchar,
  	"hero_subheadline" varchar,
  	"hero_body" varchar,
  	"hero_cta_primary_label" varchar,
  	"hero_cta_primary_href" varchar,
  	"hero_cta_secondary_label" varchar,
  	"hero_cta_secondary_href" varchar,
  	"why_teknoppy_badge" varchar,
  	"why_teknoppy_heading_lead" varchar,
  	"why_teknoppy_heading_highlight" varchar,
  	"why_teknoppy_heading_tail" varchar,
  	"why_teknoppy_intro" varchar,
  	"services_badge" varchar,
  	"services_heading_lead" varchar,
  	"services_heading_highlight" varchar,
  	"services_heading_tail" varchar,
  	"services_intro" varchar,
  	"process_badge" varchar,
  	"process_heading_lead" varchar,
  	"process_heading_highlight" varchar,
  	"process_heading_tail" varchar,
  	"process_intro" varchar,
  	"pricing_badge" varchar,
  	"pricing_heading_lead" varchar,
  	"pricing_heading_highlight" varchar,
  	"pricing_heading_tail" varchar,
  	"pricing_intro" varchar,
  	"pricing_footnote" varchar,
  	"industries_badge" varchar,
  	"industries_heading_lead" varchar,
  	"industries_heading_highlight" varchar,
  	"industries_heading_tail" varchar,
  	"industries_intro" varchar,
  	"case_studies_badge" varchar,
  	"case_studies_heading_lead" varchar,
  	"case_studies_heading_highlight" varchar,
  	"case_studies_heading_tail" varchar,
  	"case_studies_intro" varchar,
  	"testimonials_badge" varchar,
  	"testimonials_heading_lead" varchar,
  	"testimonials_heading_highlight" varchar,
  	"testimonials_heading_tail" varchar,
  	"testimonials_intro" varchar,
  	"projects_badge" varchar,
  	"projects_heading_lead" varchar,
  	"projects_heading_highlight" varchar,
  	"projects_heading_tail" varchar,
  	"projects_intro" varchar,
  	"insights_badge" varchar,
  	"insights_heading_lead" varchar,
  	"insights_heading_highlight" varchar,
  	"insights_heading_tail" varchar,
  	"insights_view_all_label" varchar,
  	"insights_view_all_href" varchar,
  	"faqs_badge" varchar,
  	"faqs_heading_lead" varchar,
  	"faqs_heading_highlight" varchar,
  	"faqs_heading_tail" varchar,
  	"faqs_intro" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_breadcrumb" ADD CONSTRAINT "pages_breadcrumb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_body" ADD CONSTRAINT "pages_blocks_hero_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_ctas" ADD CONSTRAINT "pages_blocks_hero_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_stats" ADD CONSTRAINT "pages_blocks_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_meta" ADD CONSTRAINT "pages_blocks_hero_meta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_items" ADD CONSTRAINT "pages_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards" ADD CONSTRAINT "pages_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_steps_items" ADD CONSTRAINT "pages_blocks_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_steps" ADD CONSTRAINT "pages_blocks_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_bullets_items" ADD CONSTRAINT "pages_blocks_bullets_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_bullets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_bullets_outro" ADD CONSTRAINT "pages_blocks_bullets_outro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_bullets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_bullets" ADD CONSTRAINT "pages_blocks_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_prose_paragraphs" ADD CONSTRAINT "pages_blocks_prose_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_prose" ADD CONSTRAINT "pages_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_links_items" ADD CONSTRAINT "pages_blocks_links_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_links" ADD CONSTRAINT "pages_blocks_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_paragraphs" ADD CONSTRAINT "pages_blocks_cta_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_ctas" ADD CONSTRAINT "pages_blocks_cta_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_byline" ADD CONSTRAINT "pages_blocks_byline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_form_fields_options" ADD CONSTRAINT "pages_blocks_form_form_fields_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_form_fields"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_form_fields" ADD CONSTRAINT "pages_blocks_form_form_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_aside_items" ADD CONSTRAINT "pages_blocks_form_aside_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form" ADD CONSTRAINT "pages_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_nap_rows" ADD CONSTRAINT "pages_blocks_nap_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_nap"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_nap" ADD CONSTRAINT "pages_blocks_nap_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stat_band" ADD CONSTRAINT "pages_blocks_stat_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_figure" ADD CONSTRAINT "pages_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_link_groups_groups_items" ADD CONSTRAINT "pages_blocks_link_groups_groups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_link_groups_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_link_groups_groups" ADD CONSTRAINT "pages_blocks_link_groups_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_link_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_link_groups" ADD CONSTRAINT "pages_blocks_link_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_posts_items" ADD CONSTRAINT "pages_blocks_posts_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_posts" ADD CONSTRAINT "pages_blocks_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_projects_exclude" ADD CONSTRAINT "pages_blocks_projects_exclude_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_projects" ADD CONSTRAINT "pages_blocks_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_columns" ADD CONSTRAINT "pages_blocks_pricing_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_rows" ADD CONSTRAINT "pages_blocks_pricing_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing" ADD CONSTRAINT "pages_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_studies_items_intro" ADD CONSTRAINT "pages_blocks_case_studies_items_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_case_studies_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_studies_items_approach" ADD CONSTRAINT "pages_blocks_case_studies_items_approach_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_case_studies_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_studies_items_results" ADD CONSTRAINT "pages_blocks_case_studies_items_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_case_studies_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_studies_items" ADD CONSTRAINT "pages_blocks_case_studies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_case_studies" ADD CONSTRAINT "pages_blocks_case_studies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_items" ADD CONSTRAINT "pages_blocks_team_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_calculator_step_labels_c86f3c" ADD CONSTRAINT "pages_calculator_step_labels_c86f3c_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_calculator"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_tiers_c738f4" ADD CONSTRAINT "pages_tiers_c738f4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_calculator_calculator_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calculator_calculator_types" ADD CONSTRAINT "pages_blocks_calculator_calculator_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_calculator"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calculator_calculator_addons" ADD CONSTRAINT "pages_blocks_calculator_calculator_addons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_calculator"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calculator_calculator_included" ADD CONSTRAINT "pages_blocks_calculator_calculator_included_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_calculator"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calculator" ADD CONSTRAINT "pages_blocks_calculator_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_held_placeholders" ADD CONSTRAINT "pages_dev_notes_held_placeholders_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_open_items" ADD CONSTRAINT "pages_dev_notes_open_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_changes_from_source" ADD CONSTRAINT "pages_dev_notes_changes_from_source_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_before_publishing" ADD CONSTRAINT "pages_dev_notes_before_publishing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_schema_emitted" ADD CONSTRAINT "pages_dev_notes_schema_emitted_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_on_page_checklist" ADD CONSTRAINT "pages_dev_notes_on_page_checklist_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_do_not_change_without_s_e_o" ADD CONSTRAINT "pages_dev_notes_do_not_change_without_s_e_o_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_schema_required" ADD CONSTRAINT "pages_dev_notes_schema_required_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_images_required" ADD CONSTRAINT "pages_dev_notes_images_required_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_data_needed_before_launch" ADD CONSTRAINT "pages_dev_notes_data_needed_before_launch_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_dev_notes_priority_fixes" ADD CONSTRAINT "pages_dev_notes_priority_fixes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_hero_highlights" ADD CONSTRAINT "case_studies_hero_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_at_a_glance" ADD CONSTRAINT "case_studies_at_a_glance_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_about_paragraphs" ADD CONSTRAINT "case_studies_about_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_challenges" ADD CONSTRAINT "case_studies_challenges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_objectives" ADD CONSTRAINT "case_studies_objectives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_approach_pillars_paragraphs" ADD CONSTRAINT "case_studies_approach_pillars_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_approach_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_approach_pillars" ADD CONSTRAINT "case_studies_approach_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_deliverables" ADD CONSTRAINT "case_studies_deliverables_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_why_matters_paragraphs" ADD CONSTRAINT "case_studies_why_matters_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_faqs" ADD CONSTRAINT "case_studies_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_ranking_keywords_groups_rows" ADD CONSTRAINT "case_studies_ranking_keywords_groups_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_ranking_keywords_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_ranking_keywords_groups" ADD CONSTRAINT "case_studies_ranking_keywords_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_impact_paragraphs" ADD CONSTRAINT "case_studies_impact_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_portfolio_fk" FOREIGN KEY ("portfolio_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_hero_trust_bar" ADD CONSTRAINT "home_hero_trust_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_about_paragraphs" ADD CONSTRAINT "home_about_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_about_stats" ADD CONSTRAINT "home_about_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_services_cards" ADD CONSTRAINT "home_services_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_why_choose_us_features" ADD CONSTRAINT "home_why_choose_us_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_faq_items" ADD CONSTRAINT "home_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients_logos" ADD CONSTRAINT "clients_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "video_testimonials_videos" ADD CONSTRAINT "video_testimonials_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."video_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_life_entries_tags" ADD CONSTRAINT "life_at_teknoppy_life_entries_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy_life_entries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_life_entries" ADD CONSTRAINT "life_at_teknoppy_life_entries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_daily_timeline" ADD CONSTRAINT "life_at_teknoppy_daily_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_team_members" ADD CONSTRAINT "life_at_teknoppy_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_deliverables_197e30" ADD CONSTRAINT "life_deliverables_197e30_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy_project_workflow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_project_workflow" ADD CONSTRAINT "life_at_teknoppy_project_workflow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_active_builds" ADD CONSTRAINT "life_at_teknoppy_active_builds_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_client_moments" ADD CONSTRAINT "life_at_teknoppy_client_moments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_milestones" ADD CONSTRAINT "life_at_teknoppy_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "life_at_teknoppy_culture_moments" ADD CONSTRAINT "life_at_teknoppy_culture_moments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."life_at_teknoppy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_index_filter_categories" ADD CONSTRAINT "case_studies_index_filter_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_index"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_categories_a87ab5" ADD CONSTRAINT "case_categories_a87ab5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_index_case_studies_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_index_case_studies_list" ADD CONSTRAINT "case_studies_index_case_studies_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_index"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_index_case_study_f_a_qs" ADD CONSTRAINT "case_studies_index_case_study_f_a_qs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_index"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "website_portfolio_portfolio_filter_categories" ADD CONSTRAINT "website_portfolio_portfolio_filter_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."website_portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "website_categories_fcd2fa" ADD CONSTRAINT "website_categories_fcd2fa_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."website_portfolio_website_portfolio_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "website_portfolio_website_portfolio_projects" ADD CONSTRAINT "website_portfolio_website_portfolio_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."website_portfolio"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_team_members" ADD CONSTRAINT "about_page_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_faq_items" ADD CONSTRAINT "about_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_dev_notes_team_data_needed" ADD CONSTRAINT "about_page_dev_notes_team_data_needed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page_categories_items_match" ADD CONSTRAINT "blog_page_categories_items_match_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_page_categories_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page_categories_items" ADD CONSTRAINT "blog_page_categories_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page_faq_items" ADD CONSTRAINT "blog_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_dev_notes_content_rules__8e6a2a" ADD CONSTRAINT "blog_dev_notes_content_rules__8e6a2a_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page_dev_notes_open_items" ADD CONSTRAINT "blog_page_dev_notes_open_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_page_ratings_items" ADD CONSTRAINT "certifications_page_ratings_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_page_faq_items" ADD CONSTRAINT "certifications_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certifications_page_cta_buttons" ADD CONSTRAINT "certifications_page_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certificatio_dev_notes_data_needed_be_9e1fda" ADD CONSTRAINT "certificatio_dev_notes_data_needed_be_9e1fda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "certificatio_dev_notes_content_rules__e74486" ADD CONSTRAINT "certificatio_dev_notes_content_rules__e74486_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."certifications_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients_page_breadcrumb" ADD CONSTRAINT "clients_page_breadcrumb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients_page_hero_body" ADD CONSTRAINT "clients_page_hero_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients_page_sectors_items" ADD CONSTRAINT "clients_page_sectors_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients_page_links_items" ADD CONSTRAINT "clients_page_links_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients_page_faq_items" ADD CONSTRAINT "clients_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_reach_us_items" ADD CONSTRAINT "contact_page_reach_us_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_form_service_options" ADD CONSTRAINT "contact_page_form_service_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_after_submit_paragraphs" ADD CONSTRAINT "contact_page_after_submit_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_faq_items" ADD CONSTRAINT "contact_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_closing_ctas" ADD CONSTRAINT "contact_page_closing_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_dev_notes_requires_client_input" ADD CONSTRAINT "contact_page_dev_notes_requires_client_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "leadership_page_sections" ADD CONSTRAINT "leadership_page_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."leadership_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "leadership_page_connect_related_links" ADD CONSTRAINT "leadership_page_connect_related_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."leadership_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "leadership_page_faq_items" ADD CONSTRAINT "leadership_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."leadership_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "leadership_dev_notes_data_needed_be_751e51" ADD CONSTRAINT "leadership_dev_notes_data_needed_be_751e51_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."leadership_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "leadership_dev_notes_content_rules__781afc" ADD CONSTRAINT "leadership_dev_notes_content_rules__781afc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."leadership_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_hero_stats" ADD CONSTRAINT "web_design_page_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_intro_band" ADD CONSTRAINT "web_design_page_intro_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_why_teknoppy_cards" ADD CONSTRAINT "web_design_page_why_teknoppy_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_services_cards" ADD CONSTRAINT "web_design_page_services_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_process_steps" ADD CONSTRAINT "web_design_page_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_pricing_rows" ADD CONSTRAINT "web_design_page_pricing_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_industries_items" ADD CONSTRAINT "web_design_page_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_case_studies_blocks_approach" ADD CONSTRAINT "web_design_page_case_studies_blocks_approach_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_case_studies_blocks_results" ADD CONSTRAINT "web_design_page_case_studies_blocks_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_case_studies_blocks" ADD CONSTRAINT "web_design_page_case_studies_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_testimonials_items" ADD CONSTRAINT "web_design_page_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_projects_items" ADD CONSTRAINT "web_design_page_projects_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_faqs_items" ADD CONSTRAINT "web_design_page_faqs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_design_page_blog_items" ADD CONSTRAINT "web_design_page_blog_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_design_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_hero_stat_cards" ADD CONSTRAINT "wordpress_page_hero_stat_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_intro_band_paragraphs" ADD CONSTRAINT "wordpress_page_intro_band_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_why_teknoppy_cards" ADD CONSTRAINT "wordpress_page_why_teknoppy_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_services_cards" ADD CONSTRAINT "wordpress_page_services_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_process_steps" ADD CONSTRAINT "wordpress_page_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_pricing_rows" ADD CONSTRAINT "wordpress_page_pricing_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_industries_items" ADD CONSTRAINT "wordpress_page_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_case_studies_blocks_approach" ADD CONSTRAINT "wordpress_page_case_studies_blocks_approach_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_case_studies_blocks_results" ADD CONSTRAINT "wordpress_page_case_studies_blocks_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_case_studies_blocks" ADD CONSTRAINT "wordpress_page_case_studies_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_testimonials_items" ADD CONSTRAINT "wordpress_page_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_projects_items" ADD CONSTRAINT "wordpress_page_projects_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_faqs_items" ADD CONSTRAINT "wordpress_page_faqs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "wordpress_page_blog_items" ADD CONSTRAINT "wordpress_page_blog_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wordpress_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_hero_stats" ADD CONSTRAINT "ecommerce_page_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_why_teknoppy_cards" ADD CONSTRAINT "ecommerce_page_why_teknoppy_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_services_cards" ADD CONSTRAINT "ecommerce_page_services_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_platforms_items" ADD CONSTRAINT "ecommerce_page_platforms_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_process_steps" ADD CONSTRAINT "ecommerce_page_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_pricing_rows" ADD CONSTRAINT "ecommerce_page_pricing_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_industries_items" ADD CONSTRAINT "ecommerce_page_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_case_studies_blocks_approach" ADD CONSTRAINT "ecommerce_page_case_studies_blocks_approach_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_case_studies_blocks_results" ADD CONSTRAINT "ecommerce_page_case_studies_blocks_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_case_studies_blocks" ADD CONSTRAINT "ecommerce_page_case_studies_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_testimonials_items" ADD CONSTRAINT "ecommerce_page_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_projects_items" ADD CONSTRAINT "ecommerce_page_projects_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_blog_items" ADD CONSTRAINT "ecommerce_page_blog_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ecommerce_page_faqs_items" ADD CONSTRAINT "ecommerce_page_faqs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ecommerce_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_hero_stat_cards" ADD CONSTRAINT "web_application_page_hero_stat_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_why_teknoppy_cards" ADD CONSTRAINT "web_application_page_why_teknoppy_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_services_cards" ADD CONSTRAINT "web_application_page_services_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_sub_services_items" ADD CONSTRAINT "web_application_page_sub_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_process_steps" ADD CONSTRAINT "web_application_page_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_pricing_rows" ADD CONSTRAINT "web_application_page_pricing_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_industries_items" ADD CONSTRAINT "web_application_page_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_featured_case_studies_it_f291a3" ADD CONSTRAINT "web_featured_case_studies_it_f291a3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_approach_1d400f" ADD CONSTRAINT "web_approach_1d400f_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_results_b13110" ADD CONSTRAINT "web_results_b13110_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_case_studies_blocks" ADD CONSTRAINT "web_application_page_case_studies_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_testimonials_items" ADD CONSTRAINT "web_application_page_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_projects_items" ADD CONSTRAINT "web_application_page_projects_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "web_application_page_faqs_items" ADD CONSTRAINT "web_application_page_faqs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."web_application_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_hero_stat_cards" ADD CONSTRAINT "digital_marketing_page_hero_stat_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_why_teknoppy_cards" ADD CONSTRAINT "digital_marketing_page_why_teknoppy_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_services_cards" ADD CONSTRAINT "digital_marketing_page_services_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_process_steps" ADD CONSTRAINT "digital_marketing_page_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_pricing_rows" ADD CONSTRAINT "digital_marketing_page_pricing_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_industries_items" ADD CONSTRAINT "digital_marketing_page_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_approach_fdc92e" ADD CONSTRAINT "digital_approach_fdc92e_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_results_5bf77a" ADD CONSTRAINT "digital_results_5bf77a_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page_case_studies_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_case_studies_blocks" ADD CONSTRAINT "digital_marketing_page_case_studies_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_testimonials_items" ADD CONSTRAINT "digital_marketing_page_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_projects_items" ADD CONSTRAINT "digital_marketing_page_projects_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_insights_items" ADD CONSTRAINT "digital_marketing_page_insights_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digital_marketing_page_faqs_items" ADD CONSTRAINT "digital_marketing_page_faqs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digital_marketing_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_breadcrumb_order_idx" ON "pages_breadcrumb" USING btree ("_order");
  CREATE INDEX "pages_breadcrumb_parent_id_idx" ON "pages_breadcrumb" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_body_order_idx" ON "pages_blocks_hero_body" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_body_parent_id_idx" ON "pages_blocks_hero_body" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_ctas_order_idx" ON "pages_blocks_hero_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_ctas_parent_id_idx" ON "pages_blocks_hero_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_stats_order_idx" ON "pages_blocks_hero_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_stats_parent_id_idx" ON "pages_blocks_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_meta_order_idx" ON "pages_blocks_hero_meta" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_meta_parent_id_idx" ON "pages_blocks_hero_meta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_cards_items_order_idx" ON "pages_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_items_parent_id_idx" ON "pages_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_order_idx" ON "pages_blocks_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_parent_id_idx" ON "pages_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_path_idx" ON "pages_blocks_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_steps_items_order_idx" ON "pages_blocks_steps_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_steps_items_parent_id_idx" ON "pages_blocks_steps_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_steps_order_idx" ON "pages_blocks_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_steps_parent_id_idx" ON "pages_blocks_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_steps_path_idx" ON "pages_blocks_steps" USING btree ("_path");
  CREATE INDEX "pages_blocks_bullets_items_order_idx" ON "pages_blocks_bullets_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_bullets_items_parent_id_idx" ON "pages_blocks_bullets_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_bullets_outro_order_idx" ON "pages_blocks_bullets_outro" USING btree ("_order");
  CREATE INDEX "pages_blocks_bullets_outro_parent_id_idx" ON "pages_blocks_bullets_outro" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_bullets_order_idx" ON "pages_blocks_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_bullets_parent_id_idx" ON "pages_blocks_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_bullets_path_idx" ON "pages_blocks_bullets" USING btree ("_path");
  CREATE INDEX "pages_blocks_prose_paragraphs_order_idx" ON "pages_blocks_prose_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_prose_paragraphs_parent_id_idx" ON "pages_blocks_prose_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_prose_order_idx" ON "pages_blocks_prose" USING btree ("_order");
  CREATE INDEX "pages_blocks_prose_parent_id_idx" ON "pages_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_prose_path_idx" ON "pages_blocks_prose" USING btree ("_path");
  CREATE INDEX "pages_blocks_links_items_order_idx" ON "pages_blocks_links_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_links_items_parent_id_idx" ON "pages_blocks_links_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_links_order_idx" ON "pages_blocks_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_links_parent_id_idx" ON "pages_blocks_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_links_path_idx" ON "pages_blocks_links" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_paragraphs_order_idx" ON "pages_blocks_cta_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_paragraphs_parent_id_idx" ON "pages_blocks_cta_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_ctas_order_idx" ON "pages_blocks_cta_ctas" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_ctas_parent_id_idx" ON "pages_blocks_cta_ctas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_byline_order_idx" ON "pages_blocks_byline" USING btree ("_order");
  CREATE INDEX "pages_blocks_byline_parent_id_idx" ON "pages_blocks_byline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_byline_path_idx" ON "pages_blocks_byline" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_form_fields_options_order_idx" ON "pages_blocks_form_form_fields_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_form_fields_options_parent_id_idx" ON "pages_blocks_form_form_fields_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_form_fields_order_idx" ON "pages_blocks_form_form_fields" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_form_fields_parent_id_idx" ON "pages_blocks_form_form_fields" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_aside_items_order_idx" ON "pages_blocks_form_aside_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_aside_items_parent_id_idx" ON "pages_blocks_form_aside_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_order_idx" ON "pages_blocks_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_parent_id_idx" ON "pages_blocks_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_path_idx" ON "pages_blocks_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_nap_rows_order_idx" ON "pages_blocks_nap_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_nap_rows_parent_id_idx" ON "pages_blocks_nap_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_nap_order_idx" ON "pages_blocks_nap" USING btree ("_order");
  CREATE INDEX "pages_blocks_nap_parent_id_idx" ON "pages_blocks_nap" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_nap_path_idx" ON "pages_blocks_nap" USING btree ("_path");
  CREATE INDEX "pages_blocks_stat_band_order_idx" ON "pages_blocks_stat_band" USING btree ("_order");
  CREATE INDEX "pages_blocks_stat_band_parent_id_idx" ON "pages_blocks_stat_band" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stat_band_path_idx" ON "pages_blocks_stat_band" USING btree ("_path");
  CREATE INDEX "pages_blocks_figure_order_idx" ON "pages_blocks_figure" USING btree ("_order");
  CREATE INDEX "pages_blocks_figure_parent_id_idx" ON "pages_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_figure_path_idx" ON "pages_blocks_figure" USING btree ("_path");
  CREATE INDEX "pages_blocks_link_groups_groups_items_order_idx" ON "pages_blocks_link_groups_groups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_link_groups_groups_items_parent_id_idx" ON "pages_blocks_link_groups_groups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_link_groups_groups_order_idx" ON "pages_blocks_link_groups_groups" USING btree ("_order");
  CREATE INDEX "pages_blocks_link_groups_groups_parent_id_idx" ON "pages_blocks_link_groups_groups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_link_groups_order_idx" ON "pages_blocks_link_groups" USING btree ("_order");
  CREATE INDEX "pages_blocks_link_groups_parent_id_idx" ON "pages_blocks_link_groups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_link_groups_path_idx" ON "pages_blocks_link_groups" USING btree ("_path");
  CREATE INDEX "pages_blocks_posts_items_order_idx" ON "pages_blocks_posts_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_posts_items_parent_id_idx" ON "pages_blocks_posts_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_posts_order_idx" ON "pages_blocks_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_posts_parent_id_idx" ON "pages_blocks_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_posts_path_idx" ON "pages_blocks_posts" USING btree ("_path");
  CREATE INDEX "pages_blocks_projects_exclude_order_idx" ON "pages_blocks_projects_exclude" USING btree ("_order");
  CREATE INDEX "pages_blocks_projects_exclude_parent_id_idx" ON "pages_blocks_projects_exclude" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_projects_order_idx" ON "pages_blocks_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_projects_parent_id_idx" ON "pages_blocks_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_projects_path_idx" ON "pages_blocks_projects" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_columns_order_idx" ON "pages_blocks_pricing_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_columns_parent_id_idx" ON "pages_blocks_pricing_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_rows_order_idx" ON "pages_blocks_pricing_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_rows_parent_id_idx" ON "pages_blocks_pricing_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_order_idx" ON "pages_blocks_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_parent_id_idx" ON "pages_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_path_idx" ON "pages_blocks_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_case_studies_items_intro_order_idx" ON "pages_blocks_case_studies_items_intro" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_studies_items_intro_parent_id_idx" ON "pages_blocks_case_studies_items_intro" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_studies_items_approach_order_idx" ON "pages_blocks_case_studies_items_approach" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_studies_items_approach_parent_id_idx" ON "pages_blocks_case_studies_items_approach" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_studies_items_results_order_idx" ON "pages_blocks_case_studies_items_results" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_studies_items_results_parent_id_idx" ON "pages_blocks_case_studies_items_results" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_studies_items_order_idx" ON "pages_blocks_case_studies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_studies_items_parent_id_idx" ON "pages_blocks_case_studies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_studies_order_idx" ON "pages_blocks_case_studies" USING btree ("_order");
  CREATE INDEX "pages_blocks_case_studies_parent_id_idx" ON "pages_blocks_case_studies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_case_studies_path_idx" ON "pages_blocks_case_studies" USING btree ("_path");
  CREATE INDEX "pages_blocks_team_items_order_idx" ON "pages_blocks_team_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_items_parent_id_idx" ON "pages_blocks_team_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");
  CREATE INDEX "pages_calculator_step_labels_c86f3c_order_idx" ON "pages_calculator_step_labels_c86f3c" USING btree ("_order");
  CREATE INDEX "pages_calculator_step_labels_c86f3c_parent_id_idx" ON "pages_calculator_step_labels_c86f3c" USING btree ("_parent_id");
  CREATE INDEX "pages_tiers_c738f4_order_idx" ON "pages_tiers_c738f4" USING btree ("_order");
  CREATE INDEX "pages_tiers_c738f4_parent_id_idx" ON "pages_tiers_c738f4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calculator_calculator_types_order_idx" ON "pages_blocks_calculator_calculator_types" USING btree ("_order");
  CREATE INDEX "pages_blocks_calculator_calculator_types_parent_id_idx" ON "pages_blocks_calculator_calculator_types" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calculator_calculator_addons_order_idx" ON "pages_blocks_calculator_calculator_addons" USING btree ("_order");
  CREATE INDEX "pages_blocks_calculator_calculator_addons_parent_id_idx" ON "pages_blocks_calculator_calculator_addons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calculator_calculator_included_order_idx" ON "pages_blocks_calculator_calculator_included" USING btree ("_order");
  CREATE INDEX "pages_blocks_calculator_calculator_included_parent_id_idx" ON "pages_blocks_calculator_calculator_included" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calculator_order_idx" ON "pages_blocks_calculator" USING btree ("_order");
  CREATE INDEX "pages_blocks_calculator_parent_id_idx" ON "pages_blocks_calculator" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calculator_path_idx" ON "pages_blocks_calculator" USING btree ("_path");
  CREATE INDEX "pages_dev_notes_held_placeholders_order_idx" ON "pages_dev_notes_held_placeholders" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_held_placeholders_parent_id_idx" ON "pages_dev_notes_held_placeholders" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_open_items_order_idx" ON "pages_dev_notes_open_items" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_open_items_parent_id_idx" ON "pages_dev_notes_open_items" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_changes_from_source_order_idx" ON "pages_dev_notes_changes_from_source" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_changes_from_source_parent_id_idx" ON "pages_dev_notes_changes_from_source" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_before_publishing_order_idx" ON "pages_dev_notes_before_publishing" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_before_publishing_parent_id_idx" ON "pages_dev_notes_before_publishing" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_schema_emitted_order_idx" ON "pages_dev_notes_schema_emitted" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_schema_emitted_parent_id_idx" ON "pages_dev_notes_schema_emitted" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_on_page_checklist_order_idx" ON "pages_dev_notes_on_page_checklist" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_on_page_checklist_parent_id_idx" ON "pages_dev_notes_on_page_checklist" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_do_not_change_without_s_e_o_order_idx" ON "pages_dev_notes_do_not_change_without_s_e_o" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_do_not_change_without_s_e_o_parent_id_idx" ON "pages_dev_notes_do_not_change_without_s_e_o" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_schema_required_order_idx" ON "pages_dev_notes_schema_required" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_schema_required_parent_id_idx" ON "pages_dev_notes_schema_required" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_images_required_order_idx" ON "pages_dev_notes_images_required" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_images_required_parent_id_idx" ON "pages_dev_notes_images_required" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_data_needed_before_launch_order_idx" ON "pages_dev_notes_data_needed_before_launch" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_data_needed_before_launch_parent_id_idx" ON "pages_dev_notes_data_needed_before_launch" USING btree ("_parent_id");
  CREATE INDEX "pages_dev_notes_priority_fixes_order_idx" ON "pages_dev_notes_priority_fixes" USING btree ("_order");
  CREATE INDEX "pages_dev_notes_priority_fixes_parent_id_idx" ON "pages_dev_notes_priority_fixes" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "case_studies_hero_highlights_order_idx" ON "case_studies_hero_highlights" USING btree ("_order");
  CREATE INDEX "case_studies_hero_highlights_parent_id_idx" ON "case_studies_hero_highlights" USING btree ("_parent_id");
  CREATE INDEX "case_studies_at_a_glance_order_idx" ON "case_studies_at_a_glance" USING btree ("_order");
  CREATE INDEX "case_studies_at_a_glance_parent_id_idx" ON "case_studies_at_a_glance" USING btree ("_parent_id");
  CREATE INDEX "case_studies_about_paragraphs_order_idx" ON "case_studies_about_paragraphs" USING btree ("_order");
  CREATE INDEX "case_studies_about_paragraphs_parent_id_idx" ON "case_studies_about_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_challenges_order_idx" ON "case_studies_challenges" USING btree ("_order");
  CREATE INDEX "case_studies_challenges_parent_id_idx" ON "case_studies_challenges" USING btree ("_parent_id");
  CREATE INDEX "case_studies_objectives_order_idx" ON "case_studies_objectives" USING btree ("_order");
  CREATE INDEX "case_studies_objectives_parent_id_idx" ON "case_studies_objectives" USING btree ("_parent_id");
  CREATE INDEX "case_studies_approach_pillars_paragraphs_order_idx" ON "case_studies_approach_pillars_paragraphs" USING btree ("_order");
  CREATE INDEX "case_studies_approach_pillars_paragraphs_parent_id_idx" ON "case_studies_approach_pillars_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_approach_pillars_order_idx" ON "case_studies_approach_pillars" USING btree ("_order");
  CREATE INDEX "case_studies_approach_pillars_parent_id_idx" ON "case_studies_approach_pillars" USING btree ("_parent_id");
  CREATE INDEX "case_studies_deliverables_order_idx" ON "case_studies_deliverables" USING btree ("_order");
  CREATE INDEX "case_studies_deliverables_parent_id_idx" ON "case_studies_deliverables" USING btree ("_parent_id");
  CREATE INDEX "case_studies_why_matters_paragraphs_order_idx" ON "case_studies_why_matters_paragraphs" USING btree ("_order");
  CREATE INDEX "case_studies_why_matters_paragraphs_parent_id_idx" ON "case_studies_why_matters_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_faqs_order_idx" ON "case_studies_faqs" USING btree ("_order");
  CREATE INDEX "case_studies_faqs_parent_id_idx" ON "case_studies_faqs" USING btree ("_parent_id");
  CREATE INDEX "case_studies_ranking_keywords_groups_rows_order_idx" ON "case_studies_ranking_keywords_groups_rows" USING btree ("_order");
  CREATE INDEX "case_studies_ranking_keywords_groups_rows_parent_id_idx" ON "case_studies_ranking_keywords_groups_rows" USING btree ("_parent_id");
  CREATE INDEX "case_studies_ranking_keywords_groups_order_idx" ON "case_studies_ranking_keywords_groups" USING btree ("_order");
  CREATE INDEX "case_studies_ranking_keywords_groups_parent_id_idx" ON "case_studies_ranking_keywords_groups" USING btree ("_parent_id");
  CREATE INDEX "case_studies_impact_paragraphs_order_idx" ON "case_studies_impact_paragraphs" USING btree ("_order");
  CREATE INDEX "case_studies_impact_paragraphs_parent_id_idx" ON "case_studies_impact_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE UNIQUE INDEX "portfolio_slug_idx" ON "portfolio" USING btree ("slug");
  CREATE INDEX "portfolio_updated_at_idx" ON "portfolio" USING btree ("updated_at");
  CREATE INDEX "portfolio_created_at_idx" ON "portfolio" USING btree ("created_at");
  CREATE UNIQUE INDEX "testimonials_slug_idx" ON "testimonials" USING btree ("slug");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_portfolio_id_idx" ON "payload_locked_documents_rels" USING btree ("portfolio_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_hero_trust_bar_order_idx" ON "home_hero_trust_bar" USING btree ("_order");
  CREATE INDEX "home_hero_trust_bar_parent_id_idx" ON "home_hero_trust_bar" USING btree ("_parent_id");
  CREATE INDEX "home_about_paragraphs_order_idx" ON "home_about_paragraphs" USING btree ("_order");
  CREATE INDEX "home_about_paragraphs_parent_id_idx" ON "home_about_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "home_about_stats_order_idx" ON "home_about_stats" USING btree ("_order");
  CREATE INDEX "home_about_stats_parent_id_idx" ON "home_about_stats" USING btree ("_parent_id");
  CREATE INDEX "home_services_cards_order_idx" ON "home_services_cards" USING btree ("_order");
  CREATE INDEX "home_services_cards_parent_id_idx" ON "home_services_cards" USING btree ("_parent_id");
  CREATE INDEX "home_why_choose_us_features_order_idx" ON "home_why_choose_us_features" USING btree ("_order");
  CREATE INDEX "home_why_choose_us_features_parent_id_idx" ON "home_why_choose_us_features" USING btree ("_parent_id");
  CREATE INDEX "home_faq_items_order_idx" ON "home_faq_items" USING btree ("_order");
  CREATE INDEX "home_faq_items_parent_id_idx" ON "home_faq_items" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX "clients_logos_order_idx" ON "clients_logos" USING btree ("_order");
  CREATE INDEX "clients_logos_parent_id_idx" ON "clients_logos" USING btree ("_parent_id");
  CREATE INDEX "video_testimonials_videos_order_idx" ON "video_testimonials_videos" USING btree ("_order");
  CREATE INDEX "video_testimonials_videos_parent_id_idx" ON "video_testimonials_videos" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_life_entries_tags_order_idx" ON "life_at_teknoppy_life_entries_tags" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_life_entries_tags_parent_id_idx" ON "life_at_teknoppy_life_entries_tags" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_life_entries_order_idx" ON "life_at_teknoppy_life_entries" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_life_entries_parent_id_idx" ON "life_at_teknoppy_life_entries" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_daily_timeline_order_idx" ON "life_at_teknoppy_daily_timeline" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_daily_timeline_parent_id_idx" ON "life_at_teknoppy_daily_timeline" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_team_members_order_idx" ON "life_at_teknoppy_team_members" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_team_members_parent_id_idx" ON "life_at_teknoppy_team_members" USING btree ("_parent_id");
  CREATE INDEX "life_deliverables_197e30_order_idx" ON "life_deliverables_197e30" USING btree ("_order");
  CREATE INDEX "life_deliverables_197e30_parent_id_idx" ON "life_deliverables_197e30" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_project_workflow_order_idx" ON "life_at_teknoppy_project_workflow" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_project_workflow_parent_id_idx" ON "life_at_teknoppy_project_workflow" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_active_builds_order_idx" ON "life_at_teknoppy_active_builds" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_active_builds_parent_id_idx" ON "life_at_teknoppy_active_builds" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_client_moments_order_idx" ON "life_at_teknoppy_client_moments" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_client_moments_parent_id_idx" ON "life_at_teknoppy_client_moments" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_milestones_order_idx" ON "life_at_teknoppy_milestones" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_milestones_parent_id_idx" ON "life_at_teknoppy_milestones" USING btree ("_parent_id");
  CREATE INDEX "life_at_teknoppy_culture_moments_order_idx" ON "life_at_teknoppy_culture_moments" USING btree ("_order");
  CREATE INDEX "life_at_teknoppy_culture_moments_parent_id_idx" ON "life_at_teknoppy_culture_moments" USING btree ("_parent_id");
  CREATE INDEX "case_studies_index_filter_categories_order_idx" ON "case_studies_index_filter_categories" USING btree ("_order");
  CREATE INDEX "case_studies_index_filter_categories_parent_id_idx" ON "case_studies_index_filter_categories" USING btree ("_parent_id");
  CREATE INDEX "case_categories_a87ab5_order_idx" ON "case_categories_a87ab5" USING btree ("_order");
  CREATE INDEX "case_categories_a87ab5_parent_id_idx" ON "case_categories_a87ab5" USING btree ("_parent_id");
  CREATE INDEX "case_studies_index_case_studies_list_order_idx" ON "case_studies_index_case_studies_list" USING btree ("_order");
  CREATE INDEX "case_studies_index_case_studies_list_parent_id_idx" ON "case_studies_index_case_studies_list" USING btree ("_parent_id");
  CREATE INDEX "case_studies_index_case_study_f_a_qs_order_idx" ON "case_studies_index_case_study_f_a_qs" USING btree ("_order");
  CREATE INDEX "case_studies_index_case_study_f_a_qs_parent_id_idx" ON "case_studies_index_case_study_f_a_qs" USING btree ("_parent_id");
  CREATE INDEX "website_portfolio_portfolio_filter_categories_order_idx" ON "website_portfolio_portfolio_filter_categories" USING btree ("_order");
  CREATE INDEX "website_portfolio_portfolio_filter_categories_parent_id_idx" ON "website_portfolio_portfolio_filter_categories" USING btree ("_parent_id");
  CREATE INDEX "website_categories_fcd2fa_order_idx" ON "website_categories_fcd2fa" USING btree ("_order");
  CREATE INDEX "website_categories_fcd2fa_parent_id_idx" ON "website_categories_fcd2fa" USING btree ("_parent_id");
  CREATE INDEX "website_portfolio_website_portfolio_projects_order_idx" ON "website_portfolio_website_portfolio_projects" USING btree ("_order");
  CREATE INDEX "website_portfolio_website_portfolio_projects_parent_id_idx" ON "website_portfolio_website_portfolio_projects" USING btree ("_parent_id");
  CREATE INDEX "about_page_team_members_order_idx" ON "about_page_team_members" USING btree ("_order");
  CREATE INDEX "about_page_team_members_parent_id_idx" ON "about_page_team_members" USING btree ("_parent_id");
  CREATE INDEX "about_page_faq_items_order_idx" ON "about_page_faq_items" USING btree ("_order");
  CREATE INDEX "about_page_faq_items_parent_id_idx" ON "about_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "about_page_dev_notes_team_data_needed_order_idx" ON "about_page_dev_notes_team_data_needed" USING btree ("_order");
  CREATE INDEX "about_page_dev_notes_team_data_needed_parent_id_idx" ON "about_page_dev_notes_team_data_needed" USING btree ("_parent_id");
  CREATE INDEX "blog_page_categories_items_match_order_idx" ON "blog_page_categories_items_match" USING btree ("_order");
  CREATE INDEX "blog_page_categories_items_match_parent_id_idx" ON "blog_page_categories_items_match" USING btree ("_parent_id");
  CREATE INDEX "blog_page_categories_items_order_idx" ON "blog_page_categories_items" USING btree ("_order");
  CREATE INDEX "blog_page_categories_items_parent_id_idx" ON "blog_page_categories_items" USING btree ("_parent_id");
  CREATE INDEX "blog_page_faq_items_order_idx" ON "blog_page_faq_items" USING btree ("_order");
  CREATE INDEX "blog_page_faq_items_parent_id_idx" ON "blog_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "blog_dev_notes_content_rules__8e6a2a_order_idx" ON "blog_dev_notes_content_rules__8e6a2a" USING btree ("_order");
  CREATE INDEX "blog_dev_notes_content_rules__8e6a2a_parent_id_idx" ON "blog_dev_notes_content_rules__8e6a2a" USING btree ("_parent_id");
  CREATE INDEX "blog_page_dev_notes_open_items_order_idx" ON "blog_page_dev_notes_open_items" USING btree ("_order");
  CREATE INDEX "blog_page_dev_notes_open_items_parent_id_idx" ON "blog_page_dev_notes_open_items" USING btree ("_parent_id");
  CREATE INDEX "certifications_page_ratings_items_order_idx" ON "certifications_page_ratings_items" USING btree ("_order");
  CREATE INDEX "certifications_page_ratings_items_parent_id_idx" ON "certifications_page_ratings_items" USING btree ("_parent_id");
  CREATE INDEX "certifications_page_faq_items_order_idx" ON "certifications_page_faq_items" USING btree ("_order");
  CREATE INDEX "certifications_page_faq_items_parent_id_idx" ON "certifications_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "certifications_page_cta_buttons_order_idx" ON "certifications_page_cta_buttons" USING btree ("_order");
  CREATE INDEX "certifications_page_cta_buttons_parent_id_idx" ON "certifications_page_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "certificatio_dev_notes_data_needed_be_9e1fda_order_idx" ON "certificatio_dev_notes_data_needed_be_9e1fda" USING btree ("_order");
  CREATE INDEX "certificatio_dev_notes_data_needed_be_9e1fda_parent_id_idx" ON "certificatio_dev_notes_data_needed_be_9e1fda" USING btree ("_parent_id");
  CREATE INDEX "certificatio_dev_notes_content_rules__e74486_order_idx" ON "certificatio_dev_notes_content_rules__e74486" USING btree ("_order");
  CREATE INDEX "certificatio_dev_notes_content_rules__e74486_parent_id_idx" ON "certificatio_dev_notes_content_rules__e74486" USING btree ("_parent_id");
  CREATE INDEX "clients_page_breadcrumb_order_idx" ON "clients_page_breadcrumb" USING btree ("_order");
  CREATE INDEX "clients_page_breadcrumb_parent_id_idx" ON "clients_page_breadcrumb" USING btree ("_parent_id");
  CREATE INDEX "clients_page_hero_body_order_idx" ON "clients_page_hero_body" USING btree ("_order");
  CREATE INDEX "clients_page_hero_body_parent_id_idx" ON "clients_page_hero_body" USING btree ("_parent_id");
  CREATE INDEX "clients_page_sectors_items_order_idx" ON "clients_page_sectors_items" USING btree ("_order");
  CREATE INDEX "clients_page_sectors_items_parent_id_idx" ON "clients_page_sectors_items" USING btree ("_parent_id");
  CREATE INDEX "clients_page_links_items_order_idx" ON "clients_page_links_items" USING btree ("_order");
  CREATE INDEX "clients_page_links_items_parent_id_idx" ON "clients_page_links_items" USING btree ("_parent_id");
  CREATE INDEX "clients_page_faq_items_order_idx" ON "clients_page_faq_items" USING btree ("_order");
  CREATE INDEX "clients_page_faq_items_parent_id_idx" ON "clients_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "contact_page_reach_us_items_order_idx" ON "contact_page_reach_us_items" USING btree ("_order");
  CREATE INDEX "contact_page_reach_us_items_parent_id_idx" ON "contact_page_reach_us_items" USING btree ("_parent_id");
  CREATE INDEX "contact_page_form_service_options_order_idx" ON "contact_page_form_service_options" USING btree ("_order");
  CREATE INDEX "contact_page_form_service_options_parent_id_idx" ON "contact_page_form_service_options" USING btree ("_parent_id");
  CREATE INDEX "contact_page_after_submit_paragraphs_order_idx" ON "contact_page_after_submit_paragraphs" USING btree ("_order");
  CREATE INDEX "contact_page_after_submit_paragraphs_parent_id_idx" ON "contact_page_after_submit_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "contact_page_faq_items_order_idx" ON "contact_page_faq_items" USING btree ("_order");
  CREATE INDEX "contact_page_faq_items_parent_id_idx" ON "contact_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "contact_page_closing_ctas_order_idx" ON "contact_page_closing_ctas" USING btree ("_order");
  CREATE INDEX "contact_page_closing_ctas_parent_id_idx" ON "contact_page_closing_ctas" USING btree ("_parent_id");
  CREATE INDEX "contact_page_dev_notes_requires_client_input_order_idx" ON "contact_page_dev_notes_requires_client_input" USING btree ("_order");
  CREATE INDEX "contact_page_dev_notes_requires_client_input_parent_id_idx" ON "contact_page_dev_notes_requires_client_input" USING btree ("_parent_id");
  CREATE INDEX "leadership_page_sections_order_idx" ON "leadership_page_sections" USING btree ("_order");
  CREATE INDEX "leadership_page_sections_parent_id_idx" ON "leadership_page_sections" USING btree ("_parent_id");
  CREATE INDEX "leadership_page_connect_related_links_order_idx" ON "leadership_page_connect_related_links" USING btree ("_order");
  CREATE INDEX "leadership_page_connect_related_links_parent_id_idx" ON "leadership_page_connect_related_links" USING btree ("_parent_id");
  CREATE INDEX "leadership_page_faq_items_order_idx" ON "leadership_page_faq_items" USING btree ("_order");
  CREATE INDEX "leadership_page_faq_items_parent_id_idx" ON "leadership_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "leadership_dev_notes_data_needed_be_751e51_order_idx" ON "leadership_dev_notes_data_needed_be_751e51" USING btree ("_order");
  CREATE INDEX "leadership_dev_notes_data_needed_be_751e51_parent_id_idx" ON "leadership_dev_notes_data_needed_be_751e51" USING btree ("_parent_id");
  CREATE INDEX "leadership_dev_notes_content_rules__781afc_order_idx" ON "leadership_dev_notes_content_rules__781afc" USING btree ("_order");
  CREATE INDEX "leadership_dev_notes_content_rules__781afc_parent_id_idx" ON "leadership_dev_notes_content_rules__781afc" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_hero_stats_order_idx" ON "web_design_page_hero_stats" USING btree ("_order");
  CREATE INDEX "web_design_page_hero_stats_parent_id_idx" ON "web_design_page_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_intro_band_order_idx" ON "web_design_page_intro_band" USING btree ("_order");
  CREATE INDEX "web_design_page_intro_band_parent_id_idx" ON "web_design_page_intro_band" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_why_teknoppy_cards_order_idx" ON "web_design_page_why_teknoppy_cards" USING btree ("_order");
  CREATE INDEX "web_design_page_why_teknoppy_cards_parent_id_idx" ON "web_design_page_why_teknoppy_cards" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_services_cards_order_idx" ON "web_design_page_services_cards" USING btree ("_order");
  CREATE INDEX "web_design_page_services_cards_parent_id_idx" ON "web_design_page_services_cards" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_process_steps_order_idx" ON "web_design_page_process_steps" USING btree ("_order");
  CREATE INDEX "web_design_page_process_steps_parent_id_idx" ON "web_design_page_process_steps" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_pricing_rows_order_idx" ON "web_design_page_pricing_rows" USING btree ("_order");
  CREATE INDEX "web_design_page_pricing_rows_parent_id_idx" ON "web_design_page_pricing_rows" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_industries_items_order_idx" ON "web_design_page_industries_items" USING btree ("_order");
  CREATE INDEX "web_design_page_industries_items_parent_id_idx" ON "web_design_page_industries_items" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_case_studies_blocks_approach_order_idx" ON "web_design_page_case_studies_blocks_approach" USING btree ("_order");
  CREATE INDEX "web_design_page_case_studies_blocks_approach_parent_id_idx" ON "web_design_page_case_studies_blocks_approach" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_case_studies_blocks_results_order_idx" ON "web_design_page_case_studies_blocks_results" USING btree ("_order");
  CREATE INDEX "web_design_page_case_studies_blocks_results_parent_id_idx" ON "web_design_page_case_studies_blocks_results" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_case_studies_blocks_order_idx" ON "web_design_page_case_studies_blocks" USING btree ("_order");
  CREATE INDEX "web_design_page_case_studies_blocks_parent_id_idx" ON "web_design_page_case_studies_blocks" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_testimonials_items_order_idx" ON "web_design_page_testimonials_items" USING btree ("_order");
  CREATE INDEX "web_design_page_testimonials_items_parent_id_idx" ON "web_design_page_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_projects_items_order_idx" ON "web_design_page_projects_items" USING btree ("_order");
  CREATE INDEX "web_design_page_projects_items_parent_id_idx" ON "web_design_page_projects_items" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_faqs_items_order_idx" ON "web_design_page_faqs_items" USING btree ("_order");
  CREATE INDEX "web_design_page_faqs_items_parent_id_idx" ON "web_design_page_faqs_items" USING btree ("_parent_id");
  CREATE INDEX "web_design_page_blog_items_order_idx" ON "web_design_page_blog_items" USING btree ("_order");
  CREATE INDEX "web_design_page_blog_items_parent_id_idx" ON "web_design_page_blog_items" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_hero_stat_cards_order_idx" ON "wordpress_page_hero_stat_cards" USING btree ("_order");
  CREATE INDEX "wordpress_page_hero_stat_cards_parent_id_idx" ON "wordpress_page_hero_stat_cards" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_intro_band_paragraphs_order_idx" ON "wordpress_page_intro_band_paragraphs" USING btree ("_order");
  CREATE INDEX "wordpress_page_intro_band_paragraphs_parent_id_idx" ON "wordpress_page_intro_band_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_why_teknoppy_cards_order_idx" ON "wordpress_page_why_teknoppy_cards" USING btree ("_order");
  CREATE INDEX "wordpress_page_why_teknoppy_cards_parent_id_idx" ON "wordpress_page_why_teknoppy_cards" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_services_cards_order_idx" ON "wordpress_page_services_cards" USING btree ("_order");
  CREATE INDEX "wordpress_page_services_cards_parent_id_idx" ON "wordpress_page_services_cards" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_process_steps_order_idx" ON "wordpress_page_process_steps" USING btree ("_order");
  CREATE INDEX "wordpress_page_process_steps_parent_id_idx" ON "wordpress_page_process_steps" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_pricing_rows_order_idx" ON "wordpress_page_pricing_rows" USING btree ("_order");
  CREATE INDEX "wordpress_page_pricing_rows_parent_id_idx" ON "wordpress_page_pricing_rows" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_industries_items_order_idx" ON "wordpress_page_industries_items" USING btree ("_order");
  CREATE INDEX "wordpress_page_industries_items_parent_id_idx" ON "wordpress_page_industries_items" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_case_studies_blocks_approach_order_idx" ON "wordpress_page_case_studies_blocks_approach" USING btree ("_order");
  CREATE INDEX "wordpress_page_case_studies_blocks_approach_parent_id_idx" ON "wordpress_page_case_studies_blocks_approach" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_case_studies_blocks_results_order_idx" ON "wordpress_page_case_studies_blocks_results" USING btree ("_order");
  CREATE INDEX "wordpress_page_case_studies_blocks_results_parent_id_idx" ON "wordpress_page_case_studies_blocks_results" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_case_studies_blocks_order_idx" ON "wordpress_page_case_studies_blocks" USING btree ("_order");
  CREATE INDEX "wordpress_page_case_studies_blocks_parent_id_idx" ON "wordpress_page_case_studies_blocks" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_testimonials_items_order_idx" ON "wordpress_page_testimonials_items" USING btree ("_order");
  CREATE INDEX "wordpress_page_testimonials_items_parent_id_idx" ON "wordpress_page_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_projects_items_order_idx" ON "wordpress_page_projects_items" USING btree ("_order");
  CREATE INDEX "wordpress_page_projects_items_parent_id_idx" ON "wordpress_page_projects_items" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_faqs_items_order_idx" ON "wordpress_page_faqs_items" USING btree ("_order");
  CREATE INDEX "wordpress_page_faqs_items_parent_id_idx" ON "wordpress_page_faqs_items" USING btree ("_parent_id");
  CREATE INDEX "wordpress_page_blog_items_order_idx" ON "wordpress_page_blog_items" USING btree ("_order");
  CREATE INDEX "wordpress_page_blog_items_parent_id_idx" ON "wordpress_page_blog_items" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_hero_stats_order_idx" ON "ecommerce_page_hero_stats" USING btree ("_order");
  CREATE INDEX "ecommerce_page_hero_stats_parent_id_idx" ON "ecommerce_page_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_why_teknoppy_cards_order_idx" ON "ecommerce_page_why_teknoppy_cards" USING btree ("_order");
  CREATE INDEX "ecommerce_page_why_teknoppy_cards_parent_id_idx" ON "ecommerce_page_why_teknoppy_cards" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_services_cards_order_idx" ON "ecommerce_page_services_cards" USING btree ("_order");
  CREATE INDEX "ecommerce_page_services_cards_parent_id_idx" ON "ecommerce_page_services_cards" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_platforms_items_order_idx" ON "ecommerce_page_platforms_items" USING btree ("_order");
  CREATE INDEX "ecommerce_page_platforms_items_parent_id_idx" ON "ecommerce_page_platforms_items" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_process_steps_order_idx" ON "ecommerce_page_process_steps" USING btree ("_order");
  CREATE INDEX "ecommerce_page_process_steps_parent_id_idx" ON "ecommerce_page_process_steps" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_pricing_rows_order_idx" ON "ecommerce_page_pricing_rows" USING btree ("_order");
  CREATE INDEX "ecommerce_page_pricing_rows_parent_id_idx" ON "ecommerce_page_pricing_rows" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_industries_items_order_idx" ON "ecommerce_page_industries_items" USING btree ("_order");
  CREATE INDEX "ecommerce_page_industries_items_parent_id_idx" ON "ecommerce_page_industries_items" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_case_studies_blocks_approach_order_idx" ON "ecommerce_page_case_studies_blocks_approach" USING btree ("_order");
  CREATE INDEX "ecommerce_page_case_studies_blocks_approach_parent_id_idx" ON "ecommerce_page_case_studies_blocks_approach" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_case_studies_blocks_results_order_idx" ON "ecommerce_page_case_studies_blocks_results" USING btree ("_order");
  CREATE INDEX "ecommerce_page_case_studies_blocks_results_parent_id_idx" ON "ecommerce_page_case_studies_blocks_results" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_case_studies_blocks_order_idx" ON "ecommerce_page_case_studies_blocks" USING btree ("_order");
  CREATE INDEX "ecommerce_page_case_studies_blocks_parent_id_idx" ON "ecommerce_page_case_studies_blocks" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_testimonials_items_order_idx" ON "ecommerce_page_testimonials_items" USING btree ("_order");
  CREATE INDEX "ecommerce_page_testimonials_items_parent_id_idx" ON "ecommerce_page_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_projects_items_order_idx" ON "ecommerce_page_projects_items" USING btree ("_order");
  CREATE INDEX "ecommerce_page_projects_items_parent_id_idx" ON "ecommerce_page_projects_items" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_blog_items_order_idx" ON "ecommerce_page_blog_items" USING btree ("_order");
  CREATE INDEX "ecommerce_page_blog_items_parent_id_idx" ON "ecommerce_page_blog_items" USING btree ("_parent_id");
  CREATE INDEX "ecommerce_page_faqs_items_order_idx" ON "ecommerce_page_faqs_items" USING btree ("_order");
  CREATE INDEX "ecommerce_page_faqs_items_parent_id_idx" ON "ecommerce_page_faqs_items" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_hero_stat_cards_order_idx" ON "web_application_page_hero_stat_cards" USING btree ("_order");
  CREATE INDEX "web_application_page_hero_stat_cards_parent_id_idx" ON "web_application_page_hero_stat_cards" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_why_teknoppy_cards_order_idx" ON "web_application_page_why_teknoppy_cards" USING btree ("_order");
  CREATE INDEX "web_application_page_why_teknoppy_cards_parent_id_idx" ON "web_application_page_why_teknoppy_cards" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_services_cards_order_idx" ON "web_application_page_services_cards" USING btree ("_order");
  CREATE INDEX "web_application_page_services_cards_parent_id_idx" ON "web_application_page_services_cards" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_sub_services_items_order_idx" ON "web_application_page_sub_services_items" USING btree ("_order");
  CREATE INDEX "web_application_page_sub_services_items_parent_id_idx" ON "web_application_page_sub_services_items" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_process_steps_order_idx" ON "web_application_page_process_steps" USING btree ("_order");
  CREATE INDEX "web_application_page_process_steps_parent_id_idx" ON "web_application_page_process_steps" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_pricing_rows_order_idx" ON "web_application_page_pricing_rows" USING btree ("_order");
  CREATE INDEX "web_application_page_pricing_rows_parent_id_idx" ON "web_application_page_pricing_rows" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_industries_items_order_idx" ON "web_application_page_industries_items" USING btree ("_order");
  CREATE INDEX "web_application_page_industries_items_parent_id_idx" ON "web_application_page_industries_items" USING btree ("_parent_id");
  CREATE INDEX "web_featured_case_studies_it_f291a3_order_idx" ON "web_featured_case_studies_it_f291a3" USING btree ("_order");
  CREATE INDEX "web_featured_case_studies_it_f291a3_parent_id_idx" ON "web_featured_case_studies_it_f291a3" USING btree ("_parent_id");
  CREATE INDEX "web_approach_1d400f_order_idx" ON "web_approach_1d400f" USING btree ("_order");
  CREATE INDEX "web_approach_1d400f_parent_id_idx" ON "web_approach_1d400f" USING btree ("_parent_id");
  CREATE INDEX "web_results_b13110_order_idx" ON "web_results_b13110" USING btree ("_order");
  CREATE INDEX "web_results_b13110_parent_id_idx" ON "web_results_b13110" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_case_studies_blocks_order_idx" ON "web_application_page_case_studies_blocks" USING btree ("_order");
  CREATE INDEX "web_application_page_case_studies_blocks_parent_id_idx" ON "web_application_page_case_studies_blocks" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_testimonials_items_order_idx" ON "web_application_page_testimonials_items" USING btree ("_order");
  CREATE INDEX "web_application_page_testimonials_items_parent_id_idx" ON "web_application_page_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_projects_items_order_idx" ON "web_application_page_projects_items" USING btree ("_order");
  CREATE INDEX "web_application_page_projects_items_parent_id_idx" ON "web_application_page_projects_items" USING btree ("_parent_id");
  CREATE INDEX "web_application_page_faqs_items_order_idx" ON "web_application_page_faqs_items" USING btree ("_order");
  CREATE INDEX "web_application_page_faqs_items_parent_id_idx" ON "web_application_page_faqs_items" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_hero_stat_cards_order_idx" ON "digital_marketing_page_hero_stat_cards" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_hero_stat_cards_parent_id_idx" ON "digital_marketing_page_hero_stat_cards" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_why_teknoppy_cards_order_idx" ON "digital_marketing_page_why_teknoppy_cards" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_why_teknoppy_cards_parent_id_idx" ON "digital_marketing_page_why_teknoppy_cards" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_services_cards_order_idx" ON "digital_marketing_page_services_cards" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_services_cards_parent_id_idx" ON "digital_marketing_page_services_cards" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_process_steps_order_idx" ON "digital_marketing_page_process_steps" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_process_steps_parent_id_idx" ON "digital_marketing_page_process_steps" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_pricing_rows_order_idx" ON "digital_marketing_page_pricing_rows" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_pricing_rows_parent_id_idx" ON "digital_marketing_page_pricing_rows" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_industries_items_order_idx" ON "digital_marketing_page_industries_items" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_industries_items_parent_id_idx" ON "digital_marketing_page_industries_items" USING btree ("_parent_id");
  CREATE INDEX "digital_approach_fdc92e_order_idx" ON "digital_approach_fdc92e" USING btree ("_order");
  CREATE INDEX "digital_approach_fdc92e_parent_id_idx" ON "digital_approach_fdc92e" USING btree ("_parent_id");
  CREATE INDEX "digital_results_5bf77a_order_idx" ON "digital_results_5bf77a" USING btree ("_order");
  CREATE INDEX "digital_results_5bf77a_parent_id_idx" ON "digital_results_5bf77a" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_case_studies_blocks_order_idx" ON "digital_marketing_page_case_studies_blocks" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_case_studies_blocks_parent_id_idx" ON "digital_marketing_page_case_studies_blocks" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_testimonials_items_order_idx" ON "digital_marketing_page_testimonials_items" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_testimonials_items_parent_id_idx" ON "digital_marketing_page_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_projects_items_order_idx" ON "digital_marketing_page_projects_items" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_projects_items_parent_id_idx" ON "digital_marketing_page_projects_items" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_insights_items_order_idx" ON "digital_marketing_page_insights_items" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_insights_items_parent_id_idx" ON "digital_marketing_page_insights_items" USING btree ("_parent_id");
  CREATE INDEX "digital_marketing_page_faqs_items_order_idx" ON "digital_marketing_page_faqs_items" USING btree ("_order");
  CREATE INDEX "digital_marketing_page_faqs_items_parent_id_idx" ON "digital_marketing_page_faqs_items" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_breadcrumb" CASCADE;
  DROP TABLE "pages_blocks_hero_body" CASCADE;
  DROP TABLE "pages_blocks_hero_ctas" CASCADE;
  DROP TABLE "pages_blocks_hero_stats" CASCADE;
  DROP TABLE "pages_blocks_hero_meta" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_cards_items" CASCADE;
  DROP TABLE "pages_blocks_cards" CASCADE;
  DROP TABLE "pages_blocks_steps_items" CASCADE;
  DROP TABLE "pages_blocks_steps" CASCADE;
  DROP TABLE "pages_blocks_bullets_items" CASCADE;
  DROP TABLE "pages_blocks_bullets_outro" CASCADE;
  DROP TABLE "pages_blocks_bullets" CASCADE;
  DROP TABLE "pages_blocks_prose_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_prose" CASCADE;
  DROP TABLE "pages_blocks_links_items" CASCADE;
  DROP TABLE "pages_blocks_links" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_cta_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_cta_ctas" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_byline" CASCADE;
  DROP TABLE "pages_blocks_form_form_fields_options" CASCADE;
  DROP TABLE "pages_blocks_form_form_fields" CASCADE;
  DROP TABLE "pages_blocks_form_aside_items" CASCADE;
  DROP TABLE "pages_blocks_form" CASCADE;
  DROP TABLE "pages_blocks_nap_rows" CASCADE;
  DROP TABLE "pages_blocks_nap" CASCADE;
  DROP TABLE "pages_blocks_stat_band" CASCADE;
  DROP TABLE "pages_blocks_figure" CASCADE;
  DROP TABLE "pages_blocks_link_groups_groups_items" CASCADE;
  DROP TABLE "pages_blocks_link_groups_groups" CASCADE;
  DROP TABLE "pages_blocks_link_groups" CASCADE;
  DROP TABLE "pages_blocks_posts_items" CASCADE;
  DROP TABLE "pages_blocks_posts" CASCADE;
  DROP TABLE "pages_blocks_projects_exclude" CASCADE;
  DROP TABLE "pages_blocks_projects" CASCADE;
  DROP TABLE "pages_blocks_pricing_columns" CASCADE;
  DROP TABLE "pages_blocks_pricing_rows" CASCADE;
  DROP TABLE "pages_blocks_pricing" CASCADE;
  DROP TABLE "pages_blocks_case_studies_items_intro" CASCADE;
  DROP TABLE "pages_blocks_case_studies_items_approach" CASCADE;
  DROP TABLE "pages_blocks_case_studies_items_results" CASCADE;
  DROP TABLE "pages_blocks_case_studies_items" CASCADE;
  DROP TABLE "pages_blocks_case_studies" CASCADE;
  DROP TABLE "pages_blocks_team_items" CASCADE;
  DROP TABLE "pages_blocks_team" CASCADE;
  DROP TABLE "pages_calculator_step_labels_c86f3c" CASCADE;
  DROP TABLE "pages_tiers_c738f4" CASCADE;
  DROP TABLE "pages_blocks_calculator_calculator_types" CASCADE;
  DROP TABLE "pages_blocks_calculator_calculator_addons" CASCADE;
  DROP TABLE "pages_blocks_calculator_calculator_included" CASCADE;
  DROP TABLE "pages_blocks_calculator" CASCADE;
  DROP TABLE "pages_dev_notes_held_placeholders" CASCADE;
  DROP TABLE "pages_dev_notes_open_items" CASCADE;
  DROP TABLE "pages_dev_notes_changes_from_source" CASCADE;
  DROP TABLE "pages_dev_notes_before_publishing" CASCADE;
  DROP TABLE "pages_dev_notes_schema_emitted" CASCADE;
  DROP TABLE "pages_dev_notes_on_page_checklist" CASCADE;
  DROP TABLE "pages_dev_notes_do_not_change_without_s_e_o" CASCADE;
  DROP TABLE "pages_dev_notes_schema_required" CASCADE;
  DROP TABLE "pages_dev_notes_images_required" CASCADE;
  DROP TABLE "pages_dev_notes_data_needed_before_launch" CASCADE;
  DROP TABLE "pages_dev_notes_priority_fixes" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "case_studies_hero_highlights" CASCADE;
  DROP TABLE "case_studies_at_a_glance" CASCADE;
  DROP TABLE "case_studies_about_paragraphs" CASCADE;
  DROP TABLE "case_studies_challenges" CASCADE;
  DROP TABLE "case_studies_objectives" CASCADE;
  DROP TABLE "case_studies_approach_pillars_paragraphs" CASCADE;
  DROP TABLE "case_studies_approach_pillars" CASCADE;
  DROP TABLE "case_studies_deliverables" CASCADE;
  DROP TABLE "case_studies_why_matters_paragraphs" CASCADE;
  DROP TABLE "case_studies_faqs" CASCADE;
  DROP TABLE "case_studies_ranking_keywords_groups_rows" CASCADE;
  DROP TABLE "case_studies_ranking_keywords_groups" CASCADE;
  DROP TABLE "case_studies_impact_paragraphs" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "portfolio" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_hero_trust_bar" CASCADE;
  DROP TABLE "home_about_paragraphs" CASCADE;
  DROP TABLE "home_about_stats" CASCADE;
  DROP TABLE "home_services_cards" CASCADE;
  DROP TABLE "home_why_choose_us_features" CASCADE;
  DROP TABLE "home_faq_items" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "site" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "clients_logos" CASCADE;
  DROP TABLE "clients" CASCADE;
  DROP TABLE "video_testimonials_videos" CASCADE;
  DROP TABLE "video_testimonials" CASCADE;
  DROP TABLE "life_at_teknoppy_life_entries_tags" CASCADE;
  DROP TABLE "life_at_teknoppy_life_entries" CASCADE;
  DROP TABLE "life_at_teknoppy_daily_timeline" CASCADE;
  DROP TABLE "life_at_teknoppy_team_members" CASCADE;
  DROP TABLE "life_deliverables_197e30" CASCADE;
  DROP TABLE "life_at_teknoppy_project_workflow" CASCADE;
  DROP TABLE "life_at_teknoppy_active_builds" CASCADE;
  DROP TABLE "life_at_teknoppy_client_moments" CASCADE;
  DROP TABLE "life_at_teknoppy_milestones" CASCADE;
  DROP TABLE "life_at_teknoppy_culture_moments" CASCADE;
  DROP TABLE "life_at_teknoppy" CASCADE;
  DROP TABLE "case_studies_index_filter_categories" CASCADE;
  DROP TABLE "case_categories_a87ab5" CASCADE;
  DROP TABLE "case_studies_index_case_studies_list" CASCADE;
  DROP TABLE "case_studies_index_case_study_f_a_qs" CASCADE;
  DROP TABLE "case_studies_index" CASCADE;
  DROP TABLE "website_portfolio_portfolio_filter_categories" CASCADE;
  DROP TABLE "website_categories_fcd2fa" CASCADE;
  DROP TABLE "website_portfolio_website_portfolio_projects" CASCADE;
  DROP TABLE "website_portfolio" CASCADE;
  DROP TABLE "about_page_team_members" CASCADE;
  DROP TABLE "about_page_faq_items" CASCADE;
  DROP TABLE "about_page_dev_notes_team_data_needed" CASCADE;
  DROP TABLE "about_page" CASCADE;
  DROP TABLE "blog_page_categories_items_match" CASCADE;
  DROP TABLE "blog_page_categories_items" CASCADE;
  DROP TABLE "blog_page_faq_items" CASCADE;
  DROP TABLE "blog_dev_notes_content_rules__8e6a2a" CASCADE;
  DROP TABLE "blog_page_dev_notes_open_items" CASCADE;
  DROP TABLE "blog_page" CASCADE;
  DROP TABLE "certifications_page_ratings_items" CASCADE;
  DROP TABLE "certifications_page_faq_items" CASCADE;
  DROP TABLE "certifications_page_cta_buttons" CASCADE;
  DROP TABLE "certificatio_dev_notes_data_needed_be_9e1fda" CASCADE;
  DROP TABLE "certificatio_dev_notes_content_rules__e74486" CASCADE;
  DROP TABLE "certifications_page" CASCADE;
  DROP TABLE "clients_page_breadcrumb" CASCADE;
  DROP TABLE "clients_page_hero_body" CASCADE;
  DROP TABLE "clients_page_sectors_items" CASCADE;
  DROP TABLE "clients_page_links_items" CASCADE;
  DROP TABLE "clients_page_faq_items" CASCADE;
  DROP TABLE "clients_page" CASCADE;
  DROP TABLE "contact_page_reach_us_items" CASCADE;
  DROP TABLE "contact_page_form_service_options" CASCADE;
  DROP TABLE "contact_page_after_submit_paragraphs" CASCADE;
  DROP TABLE "contact_page_faq_items" CASCADE;
  DROP TABLE "contact_page_closing_ctas" CASCADE;
  DROP TABLE "contact_page_dev_notes_requires_client_input" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  DROP TABLE "leadership_page_sections" CASCADE;
  DROP TABLE "leadership_page_connect_related_links" CASCADE;
  DROP TABLE "leadership_page_faq_items" CASCADE;
  DROP TABLE "leadership_dev_notes_data_needed_be_751e51" CASCADE;
  DROP TABLE "leadership_dev_notes_content_rules__781afc" CASCADE;
  DROP TABLE "leadership_page" CASCADE;
  DROP TABLE "web_design_page_hero_stats" CASCADE;
  DROP TABLE "web_design_page_intro_band" CASCADE;
  DROP TABLE "web_design_page_why_teknoppy_cards" CASCADE;
  DROP TABLE "web_design_page_services_cards" CASCADE;
  DROP TABLE "web_design_page_process_steps" CASCADE;
  DROP TABLE "web_design_page_pricing_rows" CASCADE;
  DROP TABLE "web_design_page_industries_items" CASCADE;
  DROP TABLE "web_design_page_case_studies_blocks_approach" CASCADE;
  DROP TABLE "web_design_page_case_studies_blocks_results" CASCADE;
  DROP TABLE "web_design_page_case_studies_blocks" CASCADE;
  DROP TABLE "web_design_page_testimonials_items" CASCADE;
  DROP TABLE "web_design_page_projects_items" CASCADE;
  DROP TABLE "web_design_page_faqs_items" CASCADE;
  DROP TABLE "web_design_page_blog_items" CASCADE;
  DROP TABLE "web_design_page" CASCADE;
  DROP TABLE "wordpress_page_hero_stat_cards" CASCADE;
  DROP TABLE "wordpress_page_intro_band_paragraphs" CASCADE;
  DROP TABLE "wordpress_page_why_teknoppy_cards" CASCADE;
  DROP TABLE "wordpress_page_services_cards" CASCADE;
  DROP TABLE "wordpress_page_process_steps" CASCADE;
  DROP TABLE "wordpress_page_pricing_rows" CASCADE;
  DROP TABLE "wordpress_page_industries_items" CASCADE;
  DROP TABLE "wordpress_page_case_studies_blocks_approach" CASCADE;
  DROP TABLE "wordpress_page_case_studies_blocks_results" CASCADE;
  DROP TABLE "wordpress_page_case_studies_blocks" CASCADE;
  DROP TABLE "wordpress_page_testimonials_items" CASCADE;
  DROP TABLE "wordpress_page_projects_items" CASCADE;
  DROP TABLE "wordpress_page_faqs_items" CASCADE;
  DROP TABLE "wordpress_page_blog_items" CASCADE;
  DROP TABLE "wordpress_page" CASCADE;
  DROP TABLE "ecommerce_page_hero_stats" CASCADE;
  DROP TABLE "ecommerce_page_why_teknoppy_cards" CASCADE;
  DROP TABLE "ecommerce_page_services_cards" CASCADE;
  DROP TABLE "ecommerce_page_platforms_items" CASCADE;
  DROP TABLE "ecommerce_page_process_steps" CASCADE;
  DROP TABLE "ecommerce_page_pricing_rows" CASCADE;
  DROP TABLE "ecommerce_page_industries_items" CASCADE;
  DROP TABLE "ecommerce_page_case_studies_blocks_approach" CASCADE;
  DROP TABLE "ecommerce_page_case_studies_blocks_results" CASCADE;
  DROP TABLE "ecommerce_page_case_studies_blocks" CASCADE;
  DROP TABLE "ecommerce_page_testimonials_items" CASCADE;
  DROP TABLE "ecommerce_page_projects_items" CASCADE;
  DROP TABLE "ecommerce_page_blog_items" CASCADE;
  DROP TABLE "ecommerce_page_faqs_items" CASCADE;
  DROP TABLE "ecommerce_page" CASCADE;
  DROP TABLE "web_application_page_hero_stat_cards" CASCADE;
  DROP TABLE "web_application_page_why_teknoppy_cards" CASCADE;
  DROP TABLE "web_application_page_services_cards" CASCADE;
  DROP TABLE "web_application_page_sub_services_items" CASCADE;
  DROP TABLE "web_application_page_process_steps" CASCADE;
  DROP TABLE "web_application_page_pricing_rows" CASCADE;
  DROP TABLE "web_application_page_industries_items" CASCADE;
  DROP TABLE "web_featured_case_studies_it_f291a3" CASCADE;
  DROP TABLE "web_approach_1d400f" CASCADE;
  DROP TABLE "web_results_b13110" CASCADE;
  DROP TABLE "web_application_page_case_studies_blocks" CASCADE;
  DROP TABLE "web_application_page_testimonials_items" CASCADE;
  DROP TABLE "web_application_page_projects_items" CASCADE;
  DROP TABLE "web_application_page_faqs_items" CASCADE;
  DROP TABLE "web_application_page" CASCADE;
  DROP TABLE "digital_marketing_page_hero_stat_cards" CASCADE;
  DROP TABLE "digital_marketing_page_why_teknoppy_cards" CASCADE;
  DROP TABLE "digital_marketing_page_services_cards" CASCADE;
  DROP TABLE "digital_marketing_page_process_steps" CASCADE;
  DROP TABLE "digital_marketing_page_pricing_rows" CASCADE;
  DROP TABLE "digital_marketing_page_industries_items" CASCADE;
  DROP TABLE "digital_approach_fdc92e" CASCADE;
  DROP TABLE "digital_results_5bf77a" CASCADE;
  DROP TABLE "digital_marketing_page_case_studies_blocks" CASCADE;
  DROP TABLE "digital_marketing_page_testimonials_items" CASCADE;
  DROP TABLE "digital_marketing_page_projects_items" CASCADE;
  DROP TABLE "digital_marketing_page_insights_items" CASCADE;
  DROP TABLE "digital_marketing_page_faqs_items" CASCADE;
  DROP TABLE "digital_marketing_page" CASCADE;`)
}
