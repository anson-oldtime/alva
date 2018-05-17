export enum AppState {
	Starting = 'starting',
	Started = 'started'
}

export interface SavedProject {
	elementContents: SerializedElementContent[];
	elements: SerializedElement[];
	id: string;
	lastChangedAuthor: string;
	lastChangedDate?: string;
	name: string;
	pages: SerializedPage[];
	patternLibrary: SerializedPatternLibrary;
}

export interface SerializedProject extends SavedProject {
	path: string;
}

export interface SerializedPage {
	id: string;
	name: string;
	rootId: string;
}

export interface SerializedElement {
	containerId?: string;
	contentIds: string[];
	id: string;
	name: string;
	patternId: string;
	properties: SerializedElementProperty[];
}

export interface SerializedElementContent {
	elementIds: string[];
	id: string;
	name: string;
	parentElementId?: string;
	slotId: string;
}

export enum PatternLibraryState {
	Pristine = 'pristine',
	Imported = 'imported'
}

export interface SerializedPatternLibrary {
	bundle: string;
	id: string;
	patternProperties: SerializedPatternProperty[];
	patterns: SerializedPattern[];
	root: SerializedPatternFolder;
	state: PatternLibraryState;
}

export interface SerializedPatternFolder {
	children: SerializedPatternFolder[];
	id: string;
	name: string;
	patterns: string[];
}

export enum SerializedPatternType {
	Pattern = 'pattern',
	Synthetic = 'synthetic'
}

export interface SerializedPattern {
	exportName: string;
	id: string;
	name: string;
	path: string;
	propertyIds: string[];
	slots: SerializedPatternSlot[];
	type: SerializedPatternType | string;
}

export interface SerializedPatternSlot {
	displayName: string;
	id: string;
	propertyName: string;
	type: string;
}

export enum PatternPropertyType {
	Asset = 'asset',
	Boolean = 'boolean',
	Enum = 'enum',
	NumberArray = 'number[]',
	Number = 'number',
	Object = 'object',
	StringArray = 'string[]',
	String = 'string'
}

export type ElementPropertyValue =
	| undefined
	| boolean
	| number
	| number[]
	| object
	| string
	| string[];

export type SerializedPatternProperty =
	| SerializedPatternAssetProperty
	| SerializedPatternBooleanProperty
	| SerializedPatternEnumProperty
	| SerializedPatternNumberArrayProperty
	| SerializedPatternNumberProperty
	| SerializedPatternObjectProperty
	| SerializedPatternStringArrayProperty
	| SerializedStringProperty;

export interface SerializedPropertyBase {
	hidden: boolean;
	id: string;
	label: string;
	propertyName: string;
	required: boolean;
}

export interface SerializedPatternAssetProperty extends SerializedPropertyBase {
	defaultValue?: string;
	type: PatternPropertyType.Asset;
}

export interface SerializedPatternBooleanProperty extends SerializedPropertyBase {
	defaultValue?: boolean;
	type: PatternPropertyType.Boolean;
}

export interface SerializedPatternEnumProperty extends SerializedPropertyBase {
	defaultValue?: boolean;
	options: SerializedEnumOption[];
	type: PatternPropertyType.Enum;
}

export interface SerializedEnumOption {
	id: string;
	name: string;
	ordinal: number;
	value: string;
}

export interface SerializedPatternNumberArrayProperty extends SerializedPropertyBase {
	defaultValue: number[];
	type: PatternPropertyType.NumberArray;
}

export interface SerializedPatternNumberProperty extends SerializedPropertyBase {
	defaultValue?: number;
	type: PatternPropertyType.Number;
}

export interface SerializedPatternObjectProperty extends SerializedPropertyBase {
	defaultValue?: number;
	type: PatternPropertyType.Object;
}

export interface SerializedPatternStringArrayProperty extends SerializedPropertyBase {
	defaultValue: string[];
	type: PatternPropertyType.StringArray;
}

export interface SerializedStringProperty extends SerializedPropertyBase {
	defaultValue?: string;
	type: PatternPropertyType.String;
}

export enum AlvaView {
	Pages = 'Pages',
	PageDetail = 'PageDetail',
	SplashScreen = 'SplashScreen'
}

export enum RightPane {
	Patterns = 'Patterns',
	Properties = 'Properties'
}

export enum EditState {
	Editable = 'Editable',
	Editing = 'Editing'
}

export enum SlotType {
	Children = 'children',
	Property = 'property'
}

export interface SerializedElementProperty {
	id: string;
	patternPropertyId: string;
	setDefault: boolean;
	value: ElementPropertyValue;
}

export interface RenderPage {
	id: string;
	name: string;
}

export interface LibraryAnalysis {
	bundle: string;
	path: string;
	patterns: PatternAnalysis[];
}

export interface PatternAnalysis {
	pattern: SerializedPattern;
	properties: SerializedPatternProperty[];
}