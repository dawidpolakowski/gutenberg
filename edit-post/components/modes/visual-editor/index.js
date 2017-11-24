/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress dependencies
 */
import {
	BlockList,
	PostTitle,
	WritingFlow,
	DefaultBlockAppender,
	EditorGlobalKeyboardShortcuts,
	BlockSelectionClearer,
} from '@wordpress/editor';

/**
 * Internal dependencies
 */
import './style.scss';
import { isFeatureActive } from '../../../store/selectors';

function VisualEditor( { hasFixedToolbar, onShowInspector } ) {
	// Disable reason: Clicking the canvas should clear the selection
	/* eslint-disable jsx-a11y/no-static-element-interactions */
	return (
		<BlockSelectionClearer className="editor-visual-editor">
			<EditorGlobalKeyboardShortcuts />
			<WritingFlow>
				<PostTitle />
				<BlockList
					showContextualToolbar={ ! hasFixedToolbar }
					onShowInspector={ onShowInspector }
				/>
			</WritingFlow>
			<DefaultBlockAppender />
		</BlockSelectionClearer>
	);
	/* eslint-enable jsx-a11y/no-static-element-interactions */
}

export default connect(
	( state ) => ( {
		hasFixedToolbar: isFeatureActive( state, 'fixedToolbar' ),
	} )
)( VisualEditor );
