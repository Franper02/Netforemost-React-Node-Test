/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ArticleKeySpecifier = ('_id' | 'author' | 'description' | 'publishedAt' | 'title' | 'url' | 'urlToImage' | ArticleKeySpecifier)[];
export type ArticleFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	urlToImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getAllArticles' | 'searchArticle' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getAllArticles?: FieldPolicy<any> | FieldReadFunction<any>,
	searchArticle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Article?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleKeySpecifier | (() => undefined | ArticleKeySpecifier),
		fields?: ArticleFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;