import S from "@sanity/desk-tool/structure-builder";
import PostPreview from "./previews/PostPreview";

export default () =>
	S.list()
		.title("Blog")
		.items([
			...S.documentTypeListItems(),
		]);

export const getDefaultDocumentNode = (props) => {
	/**
	 * Here you can define fallback views for document types without
	 * a structure definition for the document node. If you want different
	 * fallbacks for different types, or document values (e.g. if there is a slug present)
	 * you can set up that logic in here too.
	 * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
	 */
	const { schemaType } = props;
	if (schemaType === "post") {
		return S.document().views([
			S.view.form(),
			S.view.component(PostPreview).title("Preview"),
		]);
	}
	return S.document().views([S.view.form()]);
};