
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model InitialPdf
 * 
 */
export type InitialPdf = $Result.DefaultSelection<Prisma.$InitialPdfPayload>
/**
 * Model ProlongatedPdf
 * 
 */
export type ProlongatedPdf = $Result.DefaultSelection<Prisma.$ProlongatedPdfPayload>
/**
 * Model DecisionPdf
 * 
 */
export type DecisionPdf = $Result.DefaultSelection<Prisma.$DecisionPdfPayload>
/**
 * Model ConversationPdf
 * 
 */
export type ConversationPdf = $Result.DefaultSelection<Prisma.$ConversationPdfPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubmissionStatus: {
  INITIALIZED: 'INITIALIZED',
  IN_PROGRESS: 'IN_PROGRESS',
  PROLONGATED: 'PROLONGATED',
  DECISION_MADE: 'DECISION_MADE',
  COMPLETED: 'COMPLETED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]

}

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.initialPdf`: Exposes CRUD operations for the **InitialPdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InitialPdfs
    * const initialPdfs = await prisma.initialPdf.findMany()
    * ```
    */
  get initialPdf(): Prisma.InitialPdfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prolongatedPdf`: Exposes CRUD operations for the **ProlongatedPdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProlongatedPdfs
    * const prolongatedPdfs = await prisma.prolongatedPdf.findMany()
    * ```
    */
  get prolongatedPdf(): Prisma.ProlongatedPdfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.decisionPdf`: Exposes CRUD operations for the **DecisionPdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DecisionPdfs
    * const decisionPdfs = await prisma.decisionPdf.findMany()
    * ```
    */
  get decisionPdf(): Prisma.DecisionPdfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationPdf`: Exposes CRUD operations for the **ConversationPdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationPdfs
    * const conversationPdfs = await prisma.conversationPdf.findMany()
    * ```
    */
  get conversationPdf(): Prisma.ConversationPdfDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    InitialPdf: 'InitialPdf',
    ProlongatedPdf: 'ProlongatedPdf',
    DecisionPdf: 'DecisionPdf',
    ConversationPdf: 'ConversationPdf'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "initialPdf" | "prolongatedPdf" | "decisionPdf" | "conversationPdf"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      InitialPdf: {
        payload: Prisma.$InitialPdfPayload<ExtArgs>
        fields: Prisma.InitialPdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InitialPdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InitialPdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>
          }
          findFirst: {
            args: Prisma.InitialPdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InitialPdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>
          }
          findMany: {
            args: Prisma.InitialPdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>[]
          }
          create: {
            args: Prisma.InitialPdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>
          }
          createMany: {
            args: Prisma.InitialPdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InitialPdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>[]
          }
          delete: {
            args: Prisma.InitialPdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>
          }
          update: {
            args: Prisma.InitialPdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>
          }
          deleteMany: {
            args: Prisma.InitialPdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InitialPdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InitialPdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>[]
          }
          upsert: {
            args: Prisma.InitialPdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InitialPdfPayload>
          }
          aggregate: {
            args: Prisma.InitialPdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInitialPdf>
          }
          groupBy: {
            args: Prisma.InitialPdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<InitialPdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.InitialPdfCountArgs<ExtArgs>
            result: $Utils.Optional<InitialPdfCountAggregateOutputType> | number
          }
        }
      }
      ProlongatedPdf: {
        payload: Prisma.$ProlongatedPdfPayload<ExtArgs>
        fields: Prisma.ProlongatedPdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProlongatedPdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProlongatedPdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>
          }
          findFirst: {
            args: Prisma.ProlongatedPdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProlongatedPdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>
          }
          findMany: {
            args: Prisma.ProlongatedPdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>[]
          }
          create: {
            args: Prisma.ProlongatedPdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>
          }
          createMany: {
            args: Prisma.ProlongatedPdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProlongatedPdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>[]
          }
          delete: {
            args: Prisma.ProlongatedPdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>
          }
          update: {
            args: Prisma.ProlongatedPdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>
          }
          deleteMany: {
            args: Prisma.ProlongatedPdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProlongatedPdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProlongatedPdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>[]
          }
          upsert: {
            args: Prisma.ProlongatedPdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProlongatedPdfPayload>
          }
          aggregate: {
            args: Prisma.ProlongatedPdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProlongatedPdf>
          }
          groupBy: {
            args: Prisma.ProlongatedPdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProlongatedPdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProlongatedPdfCountArgs<ExtArgs>
            result: $Utils.Optional<ProlongatedPdfCountAggregateOutputType> | number
          }
        }
      }
      DecisionPdf: {
        payload: Prisma.$DecisionPdfPayload<ExtArgs>
        fields: Prisma.DecisionPdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecisionPdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecisionPdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>
          }
          findFirst: {
            args: Prisma.DecisionPdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecisionPdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>
          }
          findMany: {
            args: Prisma.DecisionPdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>[]
          }
          create: {
            args: Prisma.DecisionPdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>
          }
          createMany: {
            args: Prisma.DecisionPdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecisionPdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>[]
          }
          delete: {
            args: Prisma.DecisionPdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>
          }
          update: {
            args: Prisma.DecisionPdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>
          }
          deleteMany: {
            args: Prisma.DecisionPdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecisionPdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DecisionPdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>[]
          }
          upsert: {
            args: Prisma.DecisionPdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPdfPayload>
          }
          aggregate: {
            args: Prisma.DecisionPdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecisionPdf>
          }
          groupBy: {
            args: Prisma.DecisionPdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecisionPdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecisionPdfCountArgs<ExtArgs>
            result: $Utils.Optional<DecisionPdfCountAggregateOutputType> | number
          }
        }
      }
      ConversationPdf: {
        payload: Prisma.$ConversationPdfPayload<ExtArgs>
        fields: Prisma.ConversationPdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationPdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationPdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>
          }
          findFirst: {
            args: Prisma.ConversationPdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationPdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>
          }
          findMany: {
            args: Prisma.ConversationPdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>[]
          }
          create: {
            args: Prisma.ConversationPdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>
          }
          createMany: {
            args: Prisma.ConversationPdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationPdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>[]
          }
          delete: {
            args: Prisma.ConversationPdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>
          }
          update: {
            args: Prisma.ConversationPdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>
          }
          deleteMany: {
            args: Prisma.ConversationPdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationPdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationPdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>[]
          }
          upsert: {
            args: Prisma.ConversationPdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPdfPayload>
          }
          aggregate: {
            args: Prisma.ConversationPdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationPdf>
          }
          groupBy: {
            args: Prisma.ConversationPdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationPdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationPdfCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationPdfCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    initialPdf?: InitialPdfOmit
    prolongatedPdf?: ProlongatedPdfOmit
    decisionPdf?: DecisionPdfOmit
    conversationPdf?: ConversationPdfOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    conversationPdf: number
    prolongationPdf: number
    decisionPdf: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversationPdf?: boolean | PostCountOutputTypeCountConversationPdfArgs
    prolongationPdf?: boolean | PostCountOutputTypeCountProlongationPdfArgs
    decisionPdf?: boolean | PostCountOutputTypeCountDecisionPdfArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountConversationPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationPdfWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountProlongationPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProlongatedPdfWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountDecisionPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionPdfWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    name: string | null
    initDate: string | null
    caseNumber: string | null
    partyType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.SubmissionStatus | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    initDate: string | null
    caseNumber: string | null
    partyType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.SubmissionStatus | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    initDate: number
    caseNumber: number
    partyType: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    initDate?: true
    caseNumber?: true
    partyType?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    initDate?: true
    caseNumber?: true
    partyType?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    initDate?: true
    caseNumber?: true
    partyType?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    name: string
    initDate: string | null
    caseNumber: string
    partyType: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.SubmissionStatus
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    initDate?: boolean
    caseNumber?: boolean
    partyType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    initialPdf?: boolean | Post$initialPdfArgs<ExtArgs>
    conversationPdf?: boolean | Post$conversationPdfArgs<ExtArgs>
    prolongationPdf?: boolean | Post$prolongationPdfArgs<ExtArgs>
    decisionPdf?: boolean | Post$decisionPdfArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    initDate?: boolean
    caseNumber?: boolean
    partyType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    initDate?: boolean
    caseNumber?: boolean
    partyType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    initDate?: boolean
    caseNumber?: boolean
    partyType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "initDate" | "caseNumber" | "partyType" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initialPdf?: boolean | Post$initialPdfArgs<ExtArgs>
    conversationPdf?: boolean | Post$conversationPdfArgs<ExtArgs>
    prolongationPdf?: boolean | Post$prolongationPdfArgs<ExtArgs>
    decisionPdf?: boolean | Post$decisionPdfArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      initialPdf: Prisma.$InitialPdfPayload<ExtArgs> | null
      conversationPdf: Prisma.$ConversationPdfPayload<ExtArgs>[]
      prolongationPdf: Prisma.$ProlongatedPdfPayload<ExtArgs>[]
      decisionPdf: Prisma.$DecisionPdfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      initDate: string | null
      caseNumber: string
      partyType: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.SubmissionStatus
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    initialPdf<T extends Post$initialPdfArgs<ExtArgs> = {}>(args?: Subset<T, Post$initialPdfArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conversationPdf<T extends Post$conversationPdfArgs<ExtArgs> = {}>(args?: Subset<T, Post$conversationPdfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prolongationPdf<T extends Post$prolongationPdfArgs<ExtArgs> = {}>(args?: Subset<T, Post$prolongationPdfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decisionPdf<T extends Post$decisionPdfArgs<ExtArgs> = {}>(args?: Subset<T, Post$decisionPdfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly initDate: FieldRef<"Post", 'String'>
    readonly caseNumber: FieldRef<"Post", 'String'>
    readonly partyType: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly status: FieldRef<"Post", 'SubmissionStatus'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.initialPdf
   */
  export type Post$initialPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    where?: InitialPdfWhereInput
  }

  /**
   * Post.conversationPdf
   */
  export type Post$conversationPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    where?: ConversationPdfWhereInput
    orderBy?: ConversationPdfOrderByWithRelationInput | ConversationPdfOrderByWithRelationInput[]
    cursor?: ConversationPdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationPdfScalarFieldEnum | ConversationPdfScalarFieldEnum[]
  }

  /**
   * Post.prolongationPdf
   */
  export type Post$prolongationPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    where?: ProlongatedPdfWhereInput
    orderBy?: ProlongatedPdfOrderByWithRelationInput | ProlongatedPdfOrderByWithRelationInput[]
    cursor?: ProlongatedPdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProlongatedPdfScalarFieldEnum | ProlongatedPdfScalarFieldEnum[]
  }

  /**
   * Post.decisionPdf
   */
  export type Post$decisionPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    where?: DecisionPdfWhereInput
    orderBy?: DecisionPdfOrderByWithRelationInput | DecisionPdfOrderByWithRelationInput[]
    cursor?: DecisionPdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionPdfScalarFieldEnum | DecisionPdfScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model InitialPdf
   */

  export type AggregateInitialPdf = {
    _count: InitialPdfCountAggregateOutputType | null
    _min: InitialPdfMinAggregateOutputType | null
    _max: InitialPdfMaxAggregateOutputType | null
  }

  export type InitialPdfMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type InitialPdfMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type InitialPdfCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    postId: number
    _all: number
  }


  export type InitialPdfMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type InitialPdfMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type InitialPdfCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    _all?: true
  }

  export type InitialPdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InitialPdf to aggregate.
     */
    where?: InitialPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitialPdfs to fetch.
     */
    orderBy?: InitialPdfOrderByWithRelationInput | InitialPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InitialPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitialPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitialPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InitialPdfs
    **/
    _count?: true | InitialPdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InitialPdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InitialPdfMaxAggregateInputType
  }

  export type GetInitialPdfAggregateType<T extends InitialPdfAggregateArgs> = {
        [P in keyof T & keyof AggregateInitialPdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInitialPdf[P]>
      : GetScalarType<T[P], AggregateInitialPdf[P]>
  }




  export type InitialPdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InitialPdfWhereInput
    orderBy?: InitialPdfOrderByWithAggregationInput | InitialPdfOrderByWithAggregationInput[]
    by: InitialPdfScalarFieldEnum[] | InitialPdfScalarFieldEnum
    having?: InitialPdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InitialPdfCountAggregateInputType | true
    _min?: InitialPdfMinAggregateInputType
    _max?: InitialPdfMaxAggregateInputType
  }

  export type InitialPdfGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    postId: string
    _count: InitialPdfCountAggregateOutputType | null
    _min: InitialPdfMinAggregateOutputType | null
    _max: InitialPdfMaxAggregateOutputType | null
  }

  type GetInitialPdfGroupByPayload<T extends InitialPdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InitialPdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InitialPdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InitialPdfGroupByOutputType[P]>
            : GetScalarType<T[P], InitialPdfGroupByOutputType[P]>
        }
      >
    >


  export type InitialPdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["initialPdf"]>

  export type InitialPdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["initialPdf"]>

  export type InitialPdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["initialPdf"]>

  export type InitialPdfSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
  }

  export type InitialPdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt" | "postId", ExtArgs["result"]["initialPdf"]>
  export type InitialPdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type InitialPdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type InitialPdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $InitialPdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InitialPdf"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
      postId: string
    }, ExtArgs["result"]["initialPdf"]>
    composites: {}
  }

  type InitialPdfGetPayload<S extends boolean | null | undefined | InitialPdfDefaultArgs> = $Result.GetResult<Prisma.$InitialPdfPayload, S>

  type InitialPdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InitialPdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InitialPdfCountAggregateInputType | true
    }

  export interface InitialPdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InitialPdf'], meta: { name: 'InitialPdf' } }
    /**
     * Find zero or one InitialPdf that matches the filter.
     * @param {InitialPdfFindUniqueArgs} args - Arguments to find a InitialPdf
     * @example
     * // Get one InitialPdf
     * const initialPdf = await prisma.initialPdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InitialPdfFindUniqueArgs>(args: SelectSubset<T, InitialPdfFindUniqueArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InitialPdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InitialPdfFindUniqueOrThrowArgs} args - Arguments to find a InitialPdf
     * @example
     * // Get one InitialPdf
     * const initialPdf = await prisma.initialPdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InitialPdfFindUniqueOrThrowArgs>(args: SelectSubset<T, InitialPdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InitialPdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitialPdfFindFirstArgs} args - Arguments to find a InitialPdf
     * @example
     * // Get one InitialPdf
     * const initialPdf = await prisma.initialPdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InitialPdfFindFirstArgs>(args?: SelectSubset<T, InitialPdfFindFirstArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InitialPdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitialPdfFindFirstOrThrowArgs} args - Arguments to find a InitialPdf
     * @example
     * // Get one InitialPdf
     * const initialPdf = await prisma.initialPdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InitialPdfFindFirstOrThrowArgs>(args?: SelectSubset<T, InitialPdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InitialPdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitialPdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InitialPdfs
     * const initialPdfs = await prisma.initialPdf.findMany()
     * 
     * // Get first 10 InitialPdfs
     * const initialPdfs = await prisma.initialPdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const initialPdfWithIdOnly = await prisma.initialPdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InitialPdfFindManyArgs>(args?: SelectSubset<T, InitialPdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InitialPdf.
     * @param {InitialPdfCreateArgs} args - Arguments to create a InitialPdf.
     * @example
     * // Create one InitialPdf
     * const InitialPdf = await prisma.initialPdf.create({
     *   data: {
     *     // ... data to create a InitialPdf
     *   }
     * })
     * 
     */
    create<T extends InitialPdfCreateArgs>(args: SelectSubset<T, InitialPdfCreateArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InitialPdfs.
     * @param {InitialPdfCreateManyArgs} args - Arguments to create many InitialPdfs.
     * @example
     * // Create many InitialPdfs
     * const initialPdf = await prisma.initialPdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InitialPdfCreateManyArgs>(args?: SelectSubset<T, InitialPdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InitialPdfs and returns the data saved in the database.
     * @param {InitialPdfCreateManyAndReturnArgs} args - Arguments to create many InitialPdfs.
     * @example
     * // Create many InitialPdfs
     * const initialPdf = await prisma.initialPdf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InitialPdfs and only return the `id`
     * const initialPdfWithIdOnly = await prisma.initialPdf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InitialPdfCreateManyAndReturnArgs>(args?: SelectSubset<T, InitialPdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InitialPdf.
     * @param {InitialPdfDeleteArgs} args - Arguments to delete one InitialPdf.
     * @example
     * // Delete one InitialPdf
     * const InitialPdf = await prisma.initialPdf.delete({
     *   where: {
     *     // ... filter to delete one InitialPdf
     *   }
     * })
     * 
     */
    delete<T extends InitialPdfDeleteArgs>(args: SelectSubset<T, InitialPdfDeleteArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InitialPdf.
     * @param {InitialPdfUpdateArgs} args - Arguments to update one InitialPdf.
     * @example
     * // Update one InitialPdf
     * const initialPdf = await prisma.initialPdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InitialPdfUpdateArgs>(args: SelectSubset<T, InitialPdfUpdateArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InitialPdfs.
     * @param {InitialPdfDeleteManyArgs} args - Arguments to filter InitialPdfs to delete.
     * @example
     * // Delete a few InitialPdfs
     * const { count } = await prisma.initialPdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InitialPdfDeleteManyArgs>(args?: SelectSubset<T, InitialPdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InitialPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitialPdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InitialPdfs
     * const initialPdf = await prisma.initialPdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InitialPdfUpdateManyArgs>(args: SelectSubset<T, InitialPdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InitialPdfs and returns the data updated in the database.
     * @param {InitialPdfUpdateManyAndReturnArgs} args - Arguments to update many InitialPdfs.
     * @example
     * // Update many InitialPdfs
     * const initialPdf = await prisma.initialPdf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InitialPdfs and only return the `id`
     * const initialPdfWithIdOnly = await prisma.initialPdf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InitialPdfUpdateManyAndReturnArgs>(args: SelectSubset<T, InitialPdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InitialPdf.
     * @param {InitialPdfUpsertArgs} args - Arguments to update or create a InitialPdf.
     * @example
     * // Update or create a InitialPdf
     * const initialPdf = await prisma.initialPdf.upsert({
     *   create: {
     *     // ... data to create a InitialPdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InitialPdf we want to update
     *   }
     * })
     */
    upsert<T extends InitialPdfUpsertArgs>(args: SelectSubset<T, InitialPdfUpsertArgs<ExtArgs>>): Prisma__InitialPdfClient<$Result.GetResult<Prisma.$InitialPdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InitialPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitialPdfCountArgs} args - Arguments to filter InitialPdfs to count.
     * @example
     * // Count the number of InitialPdfs
     * const count = await prisma.initialPdf.count({
     *   where: {
     *     // ... the filter for the InitialPdfs we want to count
     *   }
     * })
    **/
    count<T extends InitialPdfCountArgs>(
      args?: Subset<T, InitialPdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InitialPdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InitialPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitialPdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InitialPdfAggregateArgs>(args: Subset<T, InitialPdfAggregateArgs>): Prisma.PrismaPromise<GetInitialPdfAggregateType<T>>

    /**
     * Group by InitialPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitialPdfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InitialPdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InitialPdfGroupByArgs['orderBy'] }
        : { orderBy?: InitialPdfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InitialPdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInitialPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InitialPdf model
   */
  readonly fields: InitialPdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InitialPdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InitialPdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InitialPdf model
   */
  interface InitialPdfFieldRefs {
    readonly id: FieldRef<"InitialPdf", 'String'>
    readonly url: FieldRef<"InitialPdf", 'String'>
    readonly createdAt: FieldRef<"InitialPdf", 'DateTime'>
    readonly updatedAt: FieldRef<"InitialPdf", 'DateTime'>
    readonly postId: FieldRef<"InitialPdf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InitialPdf findUnique
   */
  export type InitialPdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * Filter, which InitialPdf to fetch.
     */
    where: InitialPdfWhereUniqueInput
  }

  /**
   * InitialPdf findUniqueOrThrow
   */
  export type InitialPdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * Filter, which InitialPdf to fetch.
     */
    where: InitialPdfWhereUniqueInput
  }

  /**
   * InitialPdf findFirst
   */
  export type InitialPdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * Filter, which InitialPdf to fetch.
     */
    where?: InitialPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitialPdfs to fetch.
     */
    orderBy?: InitialPdfOrderByWithRelationInput | InitialPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InitialPdfs.
     */
    cursor?: InitialPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitialPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitialPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InitialPdfs.
     */
    distinct?: InitialPdfScalarFieldEnum | InitialPdfScalarFieldEnum[]
  }

  /**
   * InitialPdf findFirstOrThrow
   */
  export type InitialPdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * Filter, which InitialPdf to fetch.
     */
    where?: InitialPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitialPdfs to fetch.
     */
    orderBy?: InitialPdfOrderByWithRelationInput | InitialPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InitialPdfs.
     */
    cursor?: InitialPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitialPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitialPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InitialPdfs.
     */
    distinct?: InitialPdfScalarFieldEnum | InitialPdfScalarFieldEnum[]
  }

  /**
   * InitialPdf findMany
   */
  export type InitialPdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * Filter, which InitialPdfs to fetch.
     */
    where?: InitialPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitialPdfs to fetch.
     */
    orderBy?: InitialPdfOrderByWithRelationInput | InitialPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InitialPdfs.
     */
    cursor?: InitialPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitialPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitialPdfs.
     */
    skip?: number
    distinct?: InitialPdfScalarFieldEnum | InitialPdfScalarFieldEnum[]
  }

  /**
   * InitialPdf create
   */
  export type InitialPdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * The data needed to create a InitialPdf.
     */
    data: XOR<InitialPdfCreateInput, InitialPdfUncheckedCreateInput>
  }

  /**
   * InitialPdf createMany
   */
  export type InitialPdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InitialPdfs.
     */
    data: InitialPdfCreateManyInput | InitialPdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InitialPdf createManyAndReturn
   */
  export type InitialPdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * The data used to create many InitialPdfs.
     */
    data: InitialPdfCreateManyInput | InitialPdfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InitialPdf update
   */
  export type InitialPdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * The data needed to update a InitialPdf.
     */
    data: XOR<InitialPdfUpdateInput, InitialPdfUncheckedUpdateInput>
    /**
     * Choose, which InitialPdf to update.
     */
    where: InitialPdfWhereUniqueInput
  }

  /**
   * InitialPdf updateMany
   */
  export type InitialPdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InitialPdfs.
     */
    data: XOR<InitialPdfUpdateManyMutationInput, InitialPdfUncheckedUpdateManyInput>
    /**
     * Filter which InitialPdfs to update
     */
    where?: InitialPdfWhereInput
    /**
     * Limit how many InitialPdfs to update.
     */
    limit?: number
  }

  /**
   * InitialPdf updateManyAndReturn
   */
  export type InitialPdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * The data used to update InitialPdfs.
     */
    data: XOR<InitialPdfUpdateManyMutationInput, InitialPdfUncheckedUpdateManyInput>
    /**
     * Filter which InitialPdfs to update
     */
    where?: InitialPdfWhereInput
    /**
     * Limit how many InitialPdfs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InitialPdf upsert
   */
  export type InitialPdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * The filter to search for the InitialPdf to update in case it exists.
     */
    where: InitialPdfWhereUniqueInput
    /**
     * In case the InitialPdf found by the `where` argument doesn't exist, create a new InitialPdf with this data.
     */
    create: XOR<InitialPdfCreateInput, InitialPdfUncheckedCreateInput>
    /**
     * In case the InitialPdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InitialPdfUpdateInput, InitialPdfUncheckedUpdateInput>
  }

  /**
   * InitialPdf delete
   */
  export type InitialPdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
    /**
     * Filter which InitialPdf to delete.
     */
    where: InitialPdfWhereUniqueInput
  }

  /**
   * InitialPdf deleteMany
   */
  export type InitialPdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InitialPdfs to delete
     */
    where?: InitialPdfWhereInput
    /**
     * Limit how many InitialPdfs to delete.
     */
    limit?: number
  }

  /**
   * InitialPdf without action
   */
  export type InitialPdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InitialPdf
     */
    select?: InitialPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InitialPdf
     */
    omit?: InitialPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InitialPdfInclude<ExtArgs> | null
  }


  /**
   * Model ProlongatedPdf
   */

  export type AggregateProlongatedPdf = {
    _count: ProlongatedPdfCountAggregateOutputType | null
    _min: ProlongatedPdfMinAggregateOutputType | null
    _max: ProlongatedPdfMaxAggregateOutputType | null
  }

  export type ProlongatedPdfMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type ProlongatedPdfMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type ProlongatedPdfCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    postId: number
    _all: number
  }


  export type ProlongatedPdfMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type ProlongatedPdfMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type ProlongatedPdfCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    _all?: true
  }

  export type ProlongatedPdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProlongatedPdf to aggregate.
     */
    where?: ProlongatedPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProlongatedPdfs to fetch.
     */
    orderBy?: ProlongatedPdfOrderByWithRelationInput | ProlongatedPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProlongatedPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProlongatedPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProlongatedPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProlongatedPdfs
    **/
    _count?: true | ProlongatedPdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProlongatedPdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProlongatedPdfMaxAggregateInputType
  }

  export type GetProlongatedPdfAggregateType<T extends ProlongatedPdfAggregateArgs> = {
        [P in keyof T & keyof AggregateProlongatedPdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProlongatedPdf[P]>
      : GetScalarType<T[P], AggregateProlongatedPdf[P]>
  }




  export type ProlongatedPdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProlongatedPdfWhereInput
    orderBy?: ProlongatedPdfOrderByWithAggregationInput | ProlongatedPdfOrderByWithAggregationInput[]
    by: ProlongatedPdfScalarFieldEnum[] | ProlongatedPdfScalarFieldEnum
    having?: ProlongatedPdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProlongatedPdfCountAggregateInputType | true
    _min?: ProlongatedPdfMinAggregateInputType
    _max?: ProlongatedPdfMaxAggregateInputType
  }

  export type ProlongatedPdfGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    postId: string
    _count: ProlongatedPdfCountAggregateOutputType | null
    _min: ProlongatedPdfMinAggregateOutputType | null
    _max: ProlongatedPdfMaxAggregateOutputType | null
  }

  type GetProlongatedPdfGroupByPayload<T extends ProlongatedPdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProlongatedPdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProlongatedPdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProlongatedPdfGroupByOutputType[P]>
            : GetScalarType<T[P], ProlongatedPdfGroupByOutputType[P]>
        }
      >
    >


  export type ProlongatedPdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prolongatedPdf"]>

  export type ProlongatedPdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prolongatedPdf"]>

  export type ProlongatedPdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prolongatedPdf"]>

  export type ProlongatedPdfSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
  }

  export type ProlongatedPdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt" | "postId", ExtArgs["result"]["prolongatedPdf"]>
  export type ProlongatedPdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ProlongatedPdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ProlongatedPdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ProlongatedPdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProlongatedPdf"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
      postId: string
    }, ExtArgs["result"]["prolongatedPdf"]>
    composites: {}
  }

  type ProlongatedPdfGetPayload<S extends boolean | null | undefined | ProlongatedPdfDefaultArgs> = $Result.GetResult<Prisma.$ProlongatedPdfPayload, S>

  type ProlongatedPdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProlongatedPdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProlongatedPdfCountAggregateInputType | true
    }

  export interface ProlongatedPdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProlongatedPdf'], meta: { name: 'ProlongatedPdf' } }
    /**
     * Find zero or one ProlongatedPdf that matches the filter.
     * @param {ProlongatedPdfFindUniqueArgs} args - Arguments to find a ProlongatedPdf
     * @example
     * // Get one ProlongatedPdf
     * const prolongatedPdf = await prisma.prolongatedPdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProlongatedPdfFindUniqueArgs>(args: SelectSubset<T, ProlongatedPdfFindUniqueArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProlongatedPdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProlongatedPdfFindUniqueOrThrowArgs} args - Arguments to find a ProlongatedPdf
     * @example
     * // Get one ProlongatedPdf
     * const prolongatedPdf = await prisma.prolongatedPdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProlongatedPdfFindUniqueOrThrowArgs>(args: SelectSubset<T, ProlongatedPdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProlongatedPdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProlongatedPdfFindFirstArgs} args - Arguments to find a ProlongatedPdf
     * @example
     * // Get one ProlongatedPdf
     * const prolongatedPdf = await prisma.prolongatedPdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProlongatedPdfFindFirstArgs>(args?: SelectSubset<T, ProlongatedPdfFindFirstArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProlongatedPdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProlongatedPdfFindFirstOrThrowArgs} args - Arguments to find a ProlongatedPdf
     * @example
     * // Get one ProlongatedPdf
     * const prolongatedPdf = await prisma.prolongatedPdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProlongatedPdfFindFirstOrThrowArgs>(args?: SelectSubset<T, ProlongatedPdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProlongatedPdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProlongatedPdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProlongatedPdfs
     * const prolongatedPdfs = await prisma.prolongatedPdf.findMany()
     * 
     * // Get first 10 ProlongatedPdfs
     * const prolongatedPdfs = await prisma.prolongatedPdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prolongatedPdfWithIdOnly = await prisma.prolongatedPdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProlongatedPdfFindManyArgs>(args?: SelectSubset<T, ProlongatedPdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProlongatedPdf.
     * @param {ProlongatedPdfCreateArgs} args - Arguments to create a ProlongatedPdf.
     * @example
     * // Create one ProlongatedPdf
     * const ProlongatedPdf = await prisma.prolongatedPdf.create({
     *   data: {
     *     // ... data to create a ProlongatedPdf
     *   }
     * })
     * 
     */
    create<T extends ProlongatedPdfCreateArgs>(args: SelectSubset<T, ProlongatedPdfCreateArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProlongatedPdfs.
     * @param {ProlongatedPdfCreateManyArgs} args - Arguments to create many ProlongatedPdfs.
     * @example
     * // Create many ProlongatedPdfs
     * const prolongatedPdf = await prisma.prolongatedPdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProlongatedPdfCreateManyArgs>(args?: SelectSubset<T, ProlongatedPdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProlongatedPdfs and returns the data saved in the database.
     * @param {ProlongatedPdfCreateManyAndReturnArgs} args - Arguments to create many ProlongatedPdfs.
     * @example
     * // Create many ProlongatedPdfs
     * const prolongatedPdf = await prisma.prolongatedPdf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProlongatedPdfs and only return the `id`
     * const prolongatedPdfWithIdOnly = await prisma.prolongatedPdf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProlongatedPdfCreateManyAndReturnArgs>(args?: SelectSubset<T, ProlongatedPdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProlongatedPdf.
     * @param {ProlongatedPdfDeleteArgs} args - Arguments to delete one ProlongatedPdf.
     * @example
     * // Delete one ProlongatedPdf
     * const ProlongatedPdf = await prisma.prolongatedPdf.delete({
     *   where: {
     *     // ... filter to delete one ProlongatedPdf
     *   }
     * })
     * 
     */
    delete<T extends ProlongatedPdfDeleteArgs>(args: SelectSubset<T, ProlongatedPdfDeleteArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProlongatedPdf.
     * @param {ProlongatedPdfUpdateArgs} args - Arguments to update one ProlongatedPdf.
     * @example
     * // Update one ProlongatedPdf
     * const prolongatedPdf = await prisma.prolongatedPdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProlongatedPdfUpdateArgs>(args: SelectSubset<T, ProlongatedPdfUpdateArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProlongatedPdfs.
     * @param {ProlongatedPdfDeleteManyArgs} args - Arguments to filter ProlongatedPdfs to delete.
     * @example
     * // Delete a few ProlongatedPdfs
     * const { count } = await prisma.prolongatedPdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProlongatedPdfDeleteManyArgs>(args?: SelectSubset<T, ProlongatedPdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProlongatedPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProlongatedPdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProlongatedPdfs
     * const prolongatedPdf = await prisma.prolongatedPdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProlongatedPdfUpdateManyArgs>(args: SelectSubset<T, ProlongatedPdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProlongatedPdfs and returns the data updated in the database.
     * @param {ProlongatedPdfUpdateManyAndReturnArgs} args - Arguments to update many ProlongatedPdfs.
     * @example
     * // Update many ProlongatedPdfs
     * const prolongatedPdf = await prisma.prolongatedPdf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProlongatedPdfs and only return the `id`
     * const prolongatedPdfWithIdOnly = await prisma.prolongatedPdf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProlongatedPdfUpdateManyAndReturnArgs>(args: SelectSubset<T, ProlongatedPdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProlongatedPdf.
     * @param {ProlongatedPdfUpsertArgs} args - Arguments to update or create a ProlongatedPdf.
     * @example
     * // Update or create a ProlongatedPdf
     * const prolongatedPdf = await prisma.prolongatedPdf.upsert({
     *   create: {
     *     // ... data to create a ProlongatedPdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProlongatedPdf we want to update
     *   }
     * })
     */
    upsert<T extends ProlongatedPdfUpsertArgs>(args: SelectSubset<T, ProlongatedPdfUpsertArgs<ExtArgs>>): Prisma__ProlongatedPdfClient<$Result.GetResult<Prisma.$ProlongatedPdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProlongatedPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProlongatedPdfCountArgs} args - Arguments to filter ProlongatedPdfs to count.
     * @example
     * // Count the number of ProlongatedPdfs
     * const count = await prisma.prolongatedPdf.count({
     *   where: {
     *     // ... the filter for the ProlongatedPdfs we want to count
     *   }
     * })
    **/
    count<T extends ProlongatedPdfCountArgs>(
      args?: Subset<T, ProlongatedPdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProlongatedPdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProlongatedPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProlongatedPdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProlongatedPdfAggregateArgs>(args: Subset<T, ProlongatedPdfAggregateArgs>): Prisma.PrismaPromise<GetProlongatedPdfAggregateType<T>>

    /**
     * Group by ProlongatedPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProlongatedPdfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProlongatedPdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProlongatedPdfGroupByArgs['orderBy'] }
        : { orderBy?: ProlongatedPdfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProlongatedPdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProlongatedPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProlongatedPdf model
   */
  readonly fields: ProlongatedPdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProlongatedPdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProlongatedPdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProlongatedPdf model
   */
  interface ProlongatedPdfFieldRefs {
    readonly id: FieldRef<"ProlongatedPdf", 'String'>
    readonly url: FieldRef<"ProlongatedPdf", 'String'>
    readonly createdAt: FieldRef<"ProlongatedPdf", 'DateTime'>
    readonly updatedAt: FieldRef<"ProlongatedPdf", 'DateTime'>
    readonly postId: FieldRef<"ProlongatedPdf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProlongatedPdf findUnique
   */
  export type ProlongatedPdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * Filter, which ProlongatedPdf to fetch.
     */
    where: ProlongatedPdfWhereUniqueInput
  }

  /**
   * ProlongatedPdf findUniqueOrThrow
   */
  export type ProlongatedPdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * Filter, which ProlongatedPdf to fetch.
     */
    where: ProlongatedPdfWhereUniqueInput
  }

  /**
   * ProlongatedPdf findFirst
   */
  export type ProlongatedPdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * Filter, which ProlongatedPdf to fetch.
     */
    where?: ProlongatedPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProlongatedPdfs to fetch.
     */
    orderBy?: ProlongatedPdfOrderByWithRelationInput | ProlongatedPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProlongatedPdfs.
     */
    cursor?: ProlongatedPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProlongatedPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProlongatedPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProlongatedPdfs.
     */
    distinct?: ProlongatedPdfScalarFieldEnum | ProlongatedPdfScalarFieldEnum[]
  }

  /**
   * ProlongatedPdf findFirstOrThrow
   */
  export type ProlongatedPdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * Filter, which ProlongatedPdf to fetch.
     */
    where?: ProlongatedPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProlongatedPdfs to fetch.
     */
    orderBy?: ProlongatedPdfOrderByWithRelationInput | ProlongatedPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProlongatedPdfs.
     */
    cursor?: ProlongatedPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProlongatedPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProlongatedPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProlongatedPdfs.
     */
    distinct?: ProlongatedPdfScalarFieldEnum | ProlongatedPdfScalarFieldEnum[]
  }

  /**
   * ProlongatedPdf findMany
   */
  export type ProlongatedPdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * Filter, which ProlongatedPdfs to fetch.
     */
    where?: ProlongatedPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProlongatedPdfs to fetch.
     */
    orderBy?: ProlongatedPdfOrderByWithRelationInput | ProlongatedPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProlongatedPdfs.
     */
    cursor?: ProlongatedPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProlongatedPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProlongatedPdfs.
     */
    skip?: number
    distinct?: ProlongatedPdfScalarFieldEnum | ProlongatedPdfScalarFieldEnum[]
  }

  /**
   * ProlongatedPdf create
   */
  export type ProlongatedPdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * The data needed to create a ProlongatedPdf.
     */
    data: XOR<ProlongatedPdfCreateInput, ProlongatedPdfUncheckedCreateInput>
  }

  /**
   * ProlongatedPdf createMany
   */
  export type ProlongatedPdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProlongatedPdfs.
     */
    data: ProlongatedPdfCreateManyInput | ProlongatedPdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProlongatedPdf createManyAndReturn
   */
  export type ProlongatedPdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * The data used to create many ProlongatedPdfs.
     */
    data: ProlongatedPdfCreateManyInput | ProlongatedPdfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProlongatedPdf update
   */
  export type ProlongatedPdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * The data needed to update a ProlongatedPdf.
     */
    data: XOR<ProlongatedPdfUpdateInput, ProlongatedPdfUncheckedUpdateInput>
    /**
     * Choose, which ProlongatedPdf to update.
     */
    where: ProlongatedPdfWhereUniqueInput
  }

  /**
   * ProlongatedPdf updateMany
   */
  export type ProlongatedPdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProlongatedPdfs.
     */
    data: XOR<ProlongatedPdfUpdateManyMutationInput, ProlongatedPdfUncheckedUpdateManyInput>
    /**
     * Filter which ProlongatedPdfs to update
     */
    where?: ProlongatedPdfWhereInput
    /**
     * Limit how many ProlongatedPdfs to update.
     */
    limit?: number
  }

  /**
   * ProlongatedPdf updateManyAndReturn
   */
  export type ProlongatedPdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * The data used to update ProlongatedPdfs.
     */
    data: XOR<ProlongatedPdfUpdateManyMutationInput, ProlongatedPdfUncheckedUpdateManyInput>
    /**
     * Filter which ProlongatedPdfs to update
     */
    where?: ProlongatedPdfWhereInput
    /**
     * Limit how many ProlongatedPdfs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProlongatedPdf upsert
   */
  export type ProlongatedPdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * The filter to search for the ProlongatedPdf to update in case it exists.
     */
    where: ProlongatedPdfWhereUniqueInput
    /**
     * In case the ProlongatedPdf found by the `where` argument doesn't exist, create a new ProlongatedPdf with this data.
     */
    create: XOR<ProlongatedPdfCreateInput, ProlongatedPdfUncheckedCreateInput>
    /**
     * In case the ProlongatedPdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProlongatedPdfUpdateInput, ProlongatedPdfUncheckedUpdateInput>
  }

  /**
   * ProlongatedPdf delete
   */
  export type ProlongatedPdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
    /**
     * Filter which ProlongatedPdf to delete.
     */
    where: ProlongatedPdfWhereUniqueInput
  }

  /**
   * ProlongatedPdf deleteMany
   */
  export type ProlongatedPdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProlongatedPdfs to delete
     */
    where?: ProlongatedPdfWhereInput
    /**
     * Limit how many ProlongatedPdfs to delete.
     */
    limit?: number
  }

  /**
   * ProlongatedPdf without action
   */
  export type ProlongatedPdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProlongatedPdf
     */
    select?: ProlongatedPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProlongatedPdf
     */
    omit?: ProlongatedPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProlongatedPdfInclude<ExtArgs> | null
  }


  /**
   * Model DecisionPdf
   */

  export type AggregateDecisionPdf = {
    _count: DecisionPdfCountAggregateOutputType | null
    _min: DecisionPdfMinAggregateOutputType | null
    _max: DecisionPdfMaxAggregateOutputType | null
  }

  export type DecisionPdfMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type DecisionPdfMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type DecisionPdfCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    postId: number
    _all: number
  }


  export type DecisionPdfMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type DecisionPdfMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type DecisionPdfCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    _all?: true
  }

  export type DecisionPdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecisionPdf to aggregate.
     */
    where?: DecisionPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionPdfs to fetch.
     */
    orderBy?: DecisionPdfOrderByWithRelationInput | DecisionPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecisionPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DecisionPdfs
    **/
    _count?: true | DecisionPdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecisionPdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecisionPdfMaxAggregateInputType
  }

  export type GetDecisionPdfAggregateType<T extends DecisionPdfAggregateArgs> = {
        [P in keyof T & keyof AggregateDecisionPdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecisionPdf[P]>
      : GetScalarType<T[P], AggregateDecisionPdf[P]>
  }




  export type DecisionPdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionPdfWhereInput
    orderBy?: DecisionPdfOrderByWithAggregationInput | DecisionPdfOrderByWithAggregationInput[]
    by: DecisionPdfScalarFieldEnum[] | DecisionPdfScalarFieldEnum
    having?: DecisionPdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecisionPdfCountAggregateInputType | true
    _min?: DecisionPdfMinAggregateInputType
    _max?: DecisionPdfMaxAggregateInputType
  }

  export type DecisionPdfGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    postId: string
    _count: DecisionPdfCountAggregateOutputType | null
    _min: DecisionPdfMinAggregateOutputType | null
    _max: DecisionPdfMaxAggregateOutputType | null
  }

  type GetDecisionPdfGroupByPayload<T extends DecisionPdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecisionPdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecisionPdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecisionPdfGroupByOutputType[P]>
            : GetScalarType<T[P], DecisionPdfGroupByOutputType[P]>
        }
      >
    >


  export type DecisionPdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decisionPdf"]>

  export type DecisionPdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decisionPdf"]>

  export type DecisionPdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decisionPdf"]>

  export type DecisionPdfSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
  }

  export type DecisionPdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt" | "postId", ExtArgs["result"]["decisionPdf"]>
  export type DecisionPdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type DecisionPdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type DecisionPdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $DecisionPdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DecisionPdf"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
      postId: string
    }, ExtArgs["result"]["decisionPdf"]>
    composites: {}
  }

  type DecisionPdfGetPayload<S extends boolean | null | undefined | DecisionPdfDefaultArgs> = $Result.GetResult<Prisma.$DecisionPdfPayload, S>

  type DecisionPdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DecisionPdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecisionPdfCountAggregateInputType | true
    }

  export interface DecisionPdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DecisionPdf'], meta: { name: 'DecisionPdf' } }
    /**
     * Find zero or one DecisionPdf that matches the filter.
     * @param {DecisionPdfFindUniqueArgs} args - Arguments to find a DecisionPdf
     * @example
     * // Get one DecisionPdf
     * const decisionPdf = await prisma.decisionPdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecisionPdfFindUniqueArgs>(args: SelectSubset<T, DecisionPdfFindUniqueArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DecisionPdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DecisionPdfFindUniqueOrThrowArgs} args - Arguments to find a DecisionPdf
     * @example
     * // Get one DecisionPdf
     * const decisionPdf = await prisma.decisionPdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecisionPdfFindUniqueOrThrowArgs>(args: SelectSubset<T, DecisionPdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DecisionPdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionPdfFindFirstArgs} args - Arguments to find a DecisionPdf
     * @example
     * // Get one DecisionPdf
     * const decisionPdf = await prisma.decisionPdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecisionPdfFindFirstArgs>(args?: SelectSubset<T, DecisionPdfFindFirstArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DecisionPdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionPdfFindFirstOrThrowArgs} args - Arguments to find a DecisionPdf
     * @example
     * // Get one DecisionPdf
     * const decisionPdf = await prisma.decisionPdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecisionPdfFindFirstOrThrowArgs>(args?: SelectSubset<T, DecisionPdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DecisionPdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionPdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DecisionPdfs
     * const decisionPdfs = await prisma.decisionPdf.findMany()
     * 
     * // Get first 10 DecisionPdfs
     * const decisionPdfs = await prisma.decisionPdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decisionPdfWithIdOnly = await prisma.decisionPdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DecisionPdfFindManyArgs>(args?: SelectSubset<T, DecisionPdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DecisionPdf.
     * @param {DecisionPdfCreateArgs} args - Arguments to create a DecisionPdf.
     * @example
     * // Create one DecisionPdf
     * const DecisionPdf = await prisma.decisionPdf.create({
     *   data: {
     *     // ... data to create a DecisionPdf
     *   }
     * })
     * 
     */
    create<T extends DecisionPdfCreateArgs>(args: SelectSubset<T, DecisionPdfCreateArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DecisionPdfs.
     * @param {DecisionPdfCreateManyArgs} args - Arguments to create many DecisionPdfs.
     * @example
     * // Create many DecisionPdfs
     * const decisionPdf = await prisma.decisionPdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecisionPdfCreateManyArgs>(args?: SelectSubset<T, DecisionPdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DecisionPdfs and returns the data saved in the database.
     * @param {DecisionPdfCreateManyAndReturnArgs} args - Arguments to create many DecisionPdfs.
     * @example
     * // Create many DecisionPdfs
     * const decisionPdf = await prisma.decisionPdf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DecisionPdfs and only return the `id`
     * const decisionPdfWithIdOnly = await prisma.decisionPdf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecisionPdfCreateManyAndReturnArgs>(args?: SelectSubset<T, DecisionPdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DecisionPdf.
     * @param {DecisionPdfDeleteArgs} args - Arguments to delete one DecisionPdf.
     * @example
     * // Delete one DecisionPdf
     * const DecisionPdf = await prisma.decisionPdf.delete({
     *   where: {
     *     // ... filter to delete one DecisionPdf
     *   }
     * })
     * 
     */
    delete<T extends DecisionPdfDeleteArgs>(args: SelectSubset<T, DecisionPdfDeleteArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DecisionPdf.
     * @param {DecisionPdfUpdateArgs} args - Arguments to update one DecisionPdf.
     * @example
     * // Update one DecisionPdf
     * const decisionPdf = await prisma.decisionPdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecisionPdfUpdateArgs>(args: SelectSubset<T, DecisionPdfUpdateArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DecisionPdfs.
     * @param {DecisionPdfDeleteManyArgs} args - Arguments to filter DecisionPdfs to delete.
     * @example
     * // Delete a few DecisionPdfs
     * const { count } = await prisma.decisionPdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecisionPdfDeleteManyArgs>(args?: SelectSubset<T, DecisionPdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DecisionPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionPdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DecisionPdfs
     * const decisionPdf = await prisma.decisionPdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecisionPdfUpdateManyArgs>(args: SelectSubset<T, DecisionPdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DecisionPdfs and returns the data updated in the database.
     * @param {DecisionPdfUpdateManyAndReturnArgs} args - Arguments to update many DecisionPdfs.
     * @example
     * // Update many DecisionPdfs
     * const decisionPdf = await prisma.decisionPdf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DecisionPdfs and only return the `id`
     * const decisionPdfWithIdOnly = await prisma.decisionPdf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DecisionPdfUpdateManyAndReturnArgs>(args: SelectSubset<T, DecisionPdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DecisionPdf.
     * @param {DecisionPdfUpsertArgs} args - Arguments to update or create a DecisionPdf.
     * @example
     * // Update or create a DecisionPdf
     * const decisionPdf = await prisma.decisionPdf.upsert({
     *   create: {
     *     // ... data to create a DecisionPdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DecisionPdf we want to update
     *   }
     * })
     */
    upsert<T extends DecisionPdfUpsertArgs>(args: SelectSubset<T, DecisionPdfUpsertArgs<ExtArgs>>): Prisma__DecisionPdfClient<$Result.GetResult<Prisma.$DecisionPdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DecisionPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionPdfCountArgs} args - Arguments to filter DecisionPdfs to count.
     * @example
     * // Count the number of DecisionPdfs
     * const count = await prisma.decisionPdf.count({
     *   where: {
     *     // ... the filter for the DecisionPdfs we want to count
     *   }
     * })
    **/
    count<T extends DecisionPdfCountArgs>(
      args?: Subset<T, DecisionPdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecisionPdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DecisionPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionPdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecisionPdfAggregateArgs>(args: Subset<T, DecisionPdfAggregateArgs>): Prisma.PrismaPromise<GetDecisionPdfAggregateType<T>>

    /**
     * Group by DecisionPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionPdfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DecisionPdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecisionPdfGroupByArgs['orderBy'] }
        : { orderBy?: DecisionPdfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DecisionPdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecisionPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DecisionPdf model
   */
  readonly fields: DecisionPdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DecisionPdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecisionPdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DecisionPdf model
   */
  interface DecisionPdfFieldRefs {
    readonly id: FieldRef<"DecisionPdf", 'String'>
    readonly url: FieldRef<"DecisionPdf", 'String'>
    readonly createdAt: FieldRef<"DecisionPdf", 'DateTime'>
    readonly updatedAt: FieldRef<"DecisionPdf", 'DateTime'>
    readonly postId: FieldRef<"DecisionPdf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DecisionPdf findUnique
   */
  export type DecisionPdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * Filter, which DecisionPdf to fetch.
     */
    where: DecisionPdfWhereUniqueInput
  }

  /**
   * DecisionPdf findUniqueOrThrow
   */
  export type DecisionPdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * Filter, which DecisionPdf to fetch.
     */
    where: DecisionPdfWhereUniqueInput
  }

  /**
   * DecisionPdf findFirst
   */
  export type DecisionPdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * Filter, which DecisionPdf to fetch.
     */
    where?: DecisionPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionPdfs to fetch.
     */
    orderBy?: DecisionPdfOrderByWithRelationInput | DecisionPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecisionPdfs.
     */
    cursor?: DecisionPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecisionPdfs.
     */
    distinct?: DecisionPdfScalarFieldEnum | DecisionPdfScalarFieldEnum[]
  }

  /**
   * DecisionPdf findFirstOrThrow
   */
  export type DecisionPdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * Filter, which DecisionPdf to fetch.
     */
    where?: DecisionPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionPdfs to fetch.
     */
    orderBy?: DecisionPdfOrderByWithRelationInput | DecisionPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecisionPdfs.
     */
    cursor?: DecisionPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecisionPdfs.
     */
    distinct?: DecisionPdfScalarFieldEnum | DecisionPdfScalarFieldEnum[]
  }

  /**
   * DecisionPdf findMany
   */
  export type DecisionPdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * Filter, which DecisionPdfs to fetch.
     */
    where?: DecisionPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionPdfs to fetch.
     */
    orderBy?: DecisionPdfOrderByWithRelationInput | DecisionPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DecisionPdfs.
     */
    cursor?: DecisionPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionPdfs.
     */
    skip?: number
    distinct?: DecisionPdfScalarFieldEnum | DecisionPdfScalarFieldEnum[]
  }

  /**
   * DecisionPdf create
   */
  export type DecisionPdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * The data needed to create a DecisionPdf.
     */
    data: XOR<DecisionPdfCreateInput, DecisionPdfUncheckedCreateInput>
  }

  /**
   * DecisionPdf createMany
   */
  export type DecisionPdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DecisionPdfs.
     */
    data: DecisionPdfCreateManyInput | DecisionPdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DecisionPdf createManyAndReturn
   */
  export type DecisionPdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * The data used to create many DecisionPdfs.
     */
    data: DecisionPdfCreateManyInput | DecisionPdfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DecisionPdf update
   */
  export type DecisionPdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * The data needed to update a DecisionPdf.
     */
    data: XOR<DecisionPdfUpdateInput, DecisionPdfUncheckedUpdateInput>
    /**
     * Choose, which DecisionPdf to update.
     */
    where: DecisionPdfWhereUniqueInput
  }

  /**
   * DecisionPdf updateMany
   */
  export type DecisionPdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DecisionPdfs.
     */
    data: XOR<DecisionPdfUpdateManyMutationInput, DecisionPdfUncheckedUpdateManyInput>
    /**
     * Filter which DecisionPdfs to update
     */
    where?: DecisionPdfWhereInput
    /**
     * Limit how many DecisionPdfs to update.
     */
    limit?: number
  }

  /**
   * DecisionPdf updateManyAndReturn
   */
  export type DecisionPdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * The data used to update DecisionPdfs.
     */
    data: XOR<DecisionPdfUpdateManyMutationInput, DecisionPdfUncheckedUpdateManyInput>
    /**
     * Filter which DecisionPdfs to update
     */
    where?: DecisionPdfWhereInput
    /**
     * Limit how many DecisionPdfs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DecisionPdf upsert
   */
  export type DecisionPdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * The filter to search for the DecisionPdf to update in case it exists.
     */
    where: DecisionPdfWhereUniqueInput
    /**
     * In case the DecisionPdf found by the `where` argument doesn't exist, create a new DecisionPdf with this data.
     */
    create: XOR<DecisionPdfCreateInput, DecisionPdfUncheckedCreateInput>
    /**
     * In case the DecisionPdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecisionPdfUpdateInput, DecisionPdfUncheckedUpdateInput>
  }

  /**
   * DecisionPdf delete
   */
  export type DecisionPdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
    /**
     * Filter which DecisionPdf to delete.
     */
    where: DecisionPdfWhereUniqueInput
  }

  /**
   * DecisionPdf deleteMany
   */
  export type DecisionPdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecisionPdfs to delete
     */
    where?: DecisionPdfWhereInput
    /**
     * Limit how many DecisionPdfs to delete.
     */
    limit?: number
  }

  /**
   * DecisionPdf without action
   */
  export type DecisionPdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionPdf
     */
    select?: DecisionPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecisionPdf
     */
    omit?: DecisionPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionPdfInclude<ExtArgs> | null
  }


  /**
   * Model ConversationPdf
   */

  export type AggregateConversationPdf = {
    _count: ConversationPdfCountAggregateOutputType | null
    _min: ConversationPdfMinAggregateOutputType | null
    _max: ConversationPdfMaxAggregateOutputType | null
  }

  export type ConversationPdfMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type ConversationPdfMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
  }

  export type ConversationPdfCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    postId: number
    _all: number
  }


  export type ConversationPdfMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type ConversationPdfMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
  }

  export type ConversationPdfCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    _all?: true
  }

  export type ConversationPdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationPdf to aggregate.
     */
    where?: ConversationPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationPdfs to fetch.
     */
    orderBy?: ConversationPdfOrderByWithRelationInput | ConversationPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationPdfs
    **/
    _count?: true | ConversationPdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationPdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationPdfMaxAggregateInputType
  }

  export type GetConversationPdfAggregateType<T extends ConversationPdfAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationPdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationPdf[P]>
      : GetScalarType<T[P], AggregateConversationPdf[P]>
  }




  export type ConversationPdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationPdfWhereInput
    orderBy?: ConversationPdfOrderByWithAggregationInput | ConversationPdfOrderByWithAggregationInput[]
    by: ConversationPdfScalarFieldEnum[] | ConversationPdfScalarFieldEnum
    having?: ConversationPdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationPdfCountAggregateInputType | true
    _min?: ConversationPdfMinAggregateInputType
    _max?: ConversationPdfMaxAggregateInputType
  }

  export type ConversationPdfGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    postId: string
    _count: ConversationPdfCountAggregateOutputType | null
    _min: ConversationPdfMinAggregateOutputType | null
    _max: ConversationPdfMaxAggregateOutputType | null
  }

  type GetConversationPdfGroupByPayload<T extends ConversationPdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationPdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationPdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationPdfGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationPdfGroupByOutputType[P]>
        }
      >
    >


  export type ConversationPdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationPdf"]>

  export type ConversationPdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationPdf"]>

  export type ConversationPdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationPdf"]>

  export type ConversationPdfSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
  }

  export type ConversationPdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt" | "postId", ExtArgs["result"]["conversationPdf"]>
  export type ConversationPdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ConversationPdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ConversationPdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ConversationPdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationPdf"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
      postId: string
    }, ExtArgs["result"]["conversationPdf"]>
    composites: {}
  }

  type ConversationPdfGetPayload<S extends boolean | null | undefined | ConversationPdfDefaultArgs> = $Result.GetResult<Prisma.$ConversationPdfPayload, S>

  type ConversationPdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationPdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationPdfCountAggregateInputType | true
    }

  export interface ConversationPdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationPdf'], meta: { name: 'ConversationPdf' } }
    /**
     * Find zero or one ConversationPdf that matches the filter.
     * @param {ConversationPdfFindUniqueArgs} args - Arguments to find a ConversationPdf
     * @example
     * // Get one ConversationPdf
     * const conversationPdf = await prisma.conversationPdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationPdfFindUniqueArgs>(args: SelectSubset<T, ConversationPdfFindUniqueArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationPdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationPdfFindUniqueOrThrowArgs} args - Arguments to find a ConversationPdf
     * @example
     * // Get one ConversationPdf
     * const conversationPdf = await prisma.conversationPdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationPdfFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationPdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationPdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationPdfFindFirstArgs} args - Arguments to find a ConversationPdf
     * @example
     * // Get one ConversationPdf
     * const conversationPdf = await prisma.conversationPdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationPdfFindFirstArgs>(args?: SelectSubset<T, ConversationPdfFindFirstArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationPdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationPdfFindFirstOrThrowArgs} args - Arguments to find a ConversationPdf
     * @example
     * // Get one ConversationPdf
     * const conversationPdf = await prisma.conversationPdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationPdfFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationPdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationPdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationPdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationPdfs
     * const conversationPdfs = await prisma.conversationPdf.findMany()
     * 
     * // Get first 10 ConversationPdfs
     * const conversationPdfs = await prisma.conversationPdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationPdfWithIdOnly = await prisma.conversationPdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationPdfFindManyArgs>(args?: SelectSubset<T, ConversationPdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationPdf.
     * @param {ConversationPdfCreateArgs} args - Arguments to create a ConversationPdf.
     * @example
     * // Create one ConversationPdf
     * const ConversationPdf = await prisma.conversationPdf.create({
     *   data: {
     *     // ... data to create a ConversationPdf
     *   }
     * })
     * 
     */
    create<T extends ConversationPdfCreateArgs>(args: SelectSubset<T, ConversationPdfCreateArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationPdfs.
     * @param {ConversationPdfCreateManyArgs} args - Arguments to create many ConversationPdfs.
     * @example
     * // Create many ConversationPdfs
     * const conversationPdf = await prisma.conversationPdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationPdfCreateManyArgs>(args?: SelectSubset<T, ConversationPdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversationPdfs and returns the data saved in the database.
     * @param {ConversationPdfCreateManyAndReturnArgs} args - Arguments to create many ConversationPdfs.
     * @example
     * // Create many ConversationPdfs
     * const conversationPdf = await prisma.conversationPdf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversationPdfs and only return the `id`
     * const conversationPdfWithIdOnly = await prisma.conversationPdf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationPdfCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationPdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversationPdf.
     * @param {ConversationPdfDeleteArgs} args - Arguments to delete one ConversationPdf.
     * @example
     * // Delete one ConversationPdf
     * const ConversationPdf = await prisma.conversationPdf.delete({
     *   where: {
     *     // ... filter to delete one ConversationPdf
     *   }
     * })
     * 
     */
    delete<T extends ConversationPdfDeleteArgs>(args: SelectSubset<T, ConversationPdfDeleteArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationPdf.
     * @param {ConversationPdfUpdateArgs} args - Arguments to update one ConversationPdf.
     * @example
     * // Update one ConversationPdf
     * const conversationPdf = await prisma.conversationPdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationPdfUpdateArgs>(args: SelectSubset<T, ConversationPdfUpdateArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationPdfs.
     * @param {ConversationPdfDeleteManyArgs} args - Arguments to filter ConversationPdfs to delete.
     * @example
     * // Delete a few ConversationPdfs
     * const { count } = await prisma.conversationPdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationPdfDeleteManyArgs>(args?: SelectSubset<T, ConversationPdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationPdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationPdfs
     * const conversationPdf = await prisma.conversationPdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationPdfUpdateManyArgs>(args: SelectSubset<T, ConversationPdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationPdfs and returns the data updated in the database.
     * @param {ConversationPdfUpdateManyAndReturnArgs} args - Arguments to update many ConversationPdfs.
     * @example
     * // Update many ConversationPdfs
     * const conversationPdf = await prisma.conversationPdf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversationPdfs and only return the `id`
     * const conversationPdfWithIdOnly = await prisma.conversationPdf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationPdfUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationPdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversationPdf.
     * @param {ConversationPdfUpsertArgs} args - Arguments to update or create a ConversationPdf.
     * @example
     * // Update or create a ConversationPdf
     * const conversationPdf = await prisma.conversationPdf.upsert({
     *   create: {
     *     // ... data to create a ConversationPdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationPdf we want to update
     *   }
     * })
     */
    upsert<T extends ConversationPdfUpsertArgs>(args: SelectSubset<T, ConversationPdfUpsertArgs<ExtArgs>>): Prisma__ConversationPdfClient<$Result.GetResult<Prisma.$ConversationPdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationPdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationPdfCountArgs} args - Arguments to filter ConversationPdfs to count.
     * @example
     * // Count the number of ConversationPdfs
     * const count = await prisma.conversationPdf.count({
     *   where: {
     *     // ... the filter for the ConversationPdfs we want to count
     *   }
     * })
    **/
    count<T extends ConversationPdfCountArgs>(
      args?: Subset<T, ConversationPdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationPdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationPdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationPdfAggregateArgs>(args: Subset<T, ConversationPdfAggregateArgs>): Prisma.PrismaPromise<GetConversationPdfAggregateType<T>>

    /**
     * Group by ConversationPdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationPdfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationPdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationPdfGroupByArgs['orderBy'] }
        : { orderBy?: ConversationPdfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationPdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationPdf model
   */
  readonly fields: ConversationPdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationPdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationPdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversationPdf model
   */
  interface ConversationPdfFieldRefs {
    readonly id: FieldRef<"ConversationPdf", 'String'>
    readonly url: FieldRef<"ConversationPdf", 'String'>
    readonly createdAt: FieldRef<"ConversationPdf", 'DateTime'>
    readonly updatedAt: FieldRef<"ConversationPdf", 'DateTime'>
    readonly postId: FieldRef<"ConversationPdf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConversationPdf findUnique
   */
  export type ConversationPdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * Filter, which ConversationPdf to fetch.
     */
    where: ConversationPdfWhereUniqueInput
  }

  /**
   * ConversationPdf findUniqueOrThrow
   */
  export type ConversationPdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * Filter, which ConversationPdf to fetch.
     */
    where: ConversationPdfWhereUniqueInput
  }

  /**
   * ConversationPdf findFirst
   */
  export type ConversationPdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * Filter, which ConversationPdf to fetch.
     */
    where?: ConversationPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationPdfs to fetch.
     */
    orderBy?: ConversationPdfOrderByWithRelationInput | ConversationPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationPdfs.
     */
    cursor?: ConversationPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationPdfs.
     */
    distinct?: ConversationPdfScalarFieldEnum | ConversationPdfScalarFieldEnum[]
  }

  /**
   * ConversationPdf findFirstOrThrow
   */
  export type ConversationPdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * Filter, which ConversationPdf to fetch.
     */
    where?: ConversationPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationPdfs to fetch.
     */
    orderBy?: ConversationPdfOrderByWithRelationInput | ConversationPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationPdfs.
     */
    cursor?: ConversationPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationPdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationPdfs.
     */
    distinct?: ConversationPdfScalarFieldEnum | ConversationPdfScalarFieldEnum[]
  }

  /**
   * ConversationPdf findMany
   */
  export type ConversationPdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * Filter, which ConversationPdfs to fetch.
     */
    where?: ConversationPdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationPdfs to fetch.
     */
    orderBy?: ConversationPdfOrderByWithRelationInput | ConversationPdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationPdfs.
     */
    cursor?: ConversationPdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationPdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationPdfs.
     */
    skip?: number
    distinct?: ConversationPdfScalarFieldEnum | ConversationPdfScalarFieldEnum[]
  }

  /**
   * ConversationPdf create
   */
  export type ConversationPdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationPdf.
     */
    data: XOR<ConversationPdfCreateInput, ConversationPdfUncheckedCreateInput>
  }

  /**
   * ConversationPdf createMany
   */
  export type ConversationPdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationPdfs.
     */
    data: ConversationPdfCreateManyInput | ConversationPdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationPdf createManyAndReturn
   */
  export type ConversationPdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * The data used to create many ConversationPdfs.
     */
    data: ConversationPdfCreateManyInput | ConversationPdfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationPdf update
   */
  export type ConversationPdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationPdf.
     */
    data: XOR<ConversationPdfUpdateInput, ConversationPdfUncheckedUpdateInput>
    /**
     * Choose, which ConversationPdf to update.
     */
    where: ConversationPdfWhereUniqueInput
  }

  /**
   * ConversationPdf updateMany
   */
  export type ConversationPdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationPdfs.
     */
    data: XOR<ConversationPdfUpdateManyMutationInput, ConversationPdfUncheckedUpdateManyInput>
    /**
     * Filter which ConversationPdfs to update
     */
    where?: ConversationPdfWhereInput
    /**
     * Limit how many ConversationPdfs to update.
     */
    limit?: number
  }

  /**
   * ConversationPdf updateManyAndReturn
   */
  export type ConversationPdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * The data used to update ConversationPdfs.
     */
    data: XOR<ConversationPdfUpdateManyMutationInput, ConversationPdfUncheckedUpdateManyInput>
    /**
     * Filter which ConversationPdfs to update
     */
    where?: ConversationPdfWhereInput
    /**
     * Limit how many ConversationPdfs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationPdf upsert
   */
  export type ConversationPdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationPdf to update in case it exists.
     */
    where: ConversationPdfWhereUniqueInput
    /**
     * In case the ConversationPdf found by the `where` argument doesn't exist, create a new ConversationPdf with this data.
     */
    create: XOR<ConversationPdfCreateInput, ConversationPdfUncheckedCreateInput>
    /**
     * In case the ConversationPdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationPdfUpdateInput, ConversationPdfUncheckedUpdateInput>
  }

  /**
   * ConversationPdf delete
   */
  export type ConversationPdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
    /**
     * Filter which ConversationPdf to delete.
     */
    where: ConversationPdfWhereUniqueInput
  }

  /**
   * ConversationPdf deleteMany
   */
  export type ConversationPdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationPdfs to delete
     */
    where?: ConversationPdfWhereInput
    /**
     * Limit how many ConversationPdfs to delete.
     */
    limit?: number
  }

  /**
   * ConversationPdf without action
   */
  export type ConversationPdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationPdf
     */
    select?: ConversationPdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationPdf
     */
    omit?: ConversationPdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationPdfInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    initDate: 'initDate',
    caseNumber: 'caseNumber',
    partyType: 'partyType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const InitialPdfScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId'
  };

  export type InitialPdfScalarFieldEnum = (typeof InitialPdfScalarFieldEnum)[keyof typeof InitialPdfScalarFieldEnum]


  export const ProlongatedPdfScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId'
  };

  export type ProlongatedPdfScalarFieldEnum = (typeof ProlongatedPdfScalarFieldEnum)[keyof typeof ProlongatedPdfScalarFieldEnum]


  export const DecisionPdfScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId'
  };

  export type DecisionPdfScalarFieldEnum = (typeof DecisionPdfScalarFieldEnum)[keyof typeof DecisionPdfScalarFieldEnum]


  export const ConversationPdfScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId'
  };

  export type ConversationPdfScalarFieldEnum = (typeof ConversationPdfScalarFieldEnum)[keyof typeof ConversationPdfScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    initDate?: StringNullableFilter<"Post"> | string | null
    caseNumber?: StringFilter<"Post"> | string
    partyType?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    status?: EnumSubmissionStatusFilter<"Post"> | $Enums.SubmissionStatus
    initialPdf?: XOR<InitialPdfNullableScalarRelationFilter, InitialPdfWhereInput> | null
    conversationPdf?: ConversationPdfListRelationFilter
    prolongationPdf?: ProlongatedPdfListRelationFilter
    decisionPdf?: DecisionPdfListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    initDate?: SortOrderInput | SortOrder
    caseNumber?: SortOrder
    partyType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    initialPdf?: InitialPdfOrderByWithRelationInput
    conversationPdf?: ConversationPdfOrderByRelationAggregateInput
    prolongationPdf?: ProlongatedPdfOrderByRelationAggregateInput
    decisionPdf?: DecisionPdfOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    initDate?: StringNullableFilter<"Post"> | string | null
    caseNumber?: StringFilter<"Post"> | string
    partyType?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    status?: EnumSubmissionStatusFilter<"Post"> | $Enums.SubmissionStatus
    initialPdf?: XOR<InitialPdfNullableScalarRelationFilter, InitialPdfWhereInput> | null
    conversationPdf?: ConversationPdfListRelationFilter
    prolongationPdf?: ProlongatedPdfListRelationFilter
    decisionPdf?: DecisionPdfListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    initDate?: SortOrderInput | SortOrder
    caseNumber?: SortOrder
    partyType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    name?: StringWithAggregatesFilter<"Post"> | string
    initDate?: StringNullableWithAggregatesFilter<"Post"> | string | null
    caseNumber?: StringWithAggregatesFilter<"Post"> | string
    partyType?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"Post"> | $Enums.SubmissionStatus
  }

  export type InitialPdfWhereInput = {
    AND?: InitialPdfWhereInput | InitialPdfWhereInput[]
    OR?: InitialPdfWhereInput[]
    NOT?: InitialPdfWhereInput | InitialPdfWhereInput[]
    id?: StringFilter<"InitialPdf"> | string
    url?: StringFilter<"InitialPdf"> | string
    createdAt?: DateTimeFilter<"InitialPdf"> | Date | string
    updatedAt?: DateTimeFilter<"InitialPdf"> | Date | string
    postId?: StringFilter<"InitialPdf"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type InitialPdfOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type InitialPdfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    postId?: string
    AND?: InitialPdfWhereInput | InitialPdfWhereInput[]
    OR?: InitialPdfWhereInput[]
    NOT?: InitialPdfWhereInput | InitialPdfWhereInput[]
    createdAt?: DateTimeFilter<"InitialPdf"> | Date | string
    updatedAt?: DateTimeFilter<"InitialPdf"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "url" | "postId">

  export type InitialPdfOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    _count?: InitialPdfCountOrderByAggregateInput
    _max?: InitialPdfMaxOrderByAggregateInput
    _min?: InitialPdfMinOrderByAggregateInput
  }

  export type InitialPdfScalarWhereWithAggregatesInput = {
    AND?: InitialPdfScalarWhereWithAggregatesInput | InitialPdfScalarWhereWithAggregatesInput[]
    OR?: InitialPdfScalarWhereWithAggregatesInput[]
    NOT?: InitialPdfScalarWhereWithAggregatesInput | InitialPdfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InitialPdf"> | string
    url?: StringWithAggregatesFilter<"InitialPdf"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InitialPdf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InitialPdf"> | Date | string
    postId?: StringWithAggregatesFilter<"InitialPdf"> | string
  }

  export type ProlongatedPdfWhereInput = {
    AND?: ProlongatedPdfWhereInput | ProlongatedPdfWhereInput[]
    OR?: ProlongatedPdfWhereInput[]
    NOT?: ProlongatedPdfWhereInput | ProlongatedPdfWhereInput[]
    id?: StringFilter<"ProlongatedPdf"> | string
    url?: StringFilter<"ProlongatedPdf"> | string
    createdAt?: DateTimeFilter<"ProlongatedPdf"> | Date | string
    updatedAt?: DateTimeFilter<"ProlongatedPdf"> | Date | string
    postId?: StringFilter<"ProlongatedPdf"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ProlongatedPdfOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type ProlongatedPdfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: ProlongatedPdfWhereInput | ProlongatedPdfWhereInput[]
    OR?: ProlongatedPdfWhereInput[]
    NOT?: ProlongatedPdfWhereInput | ProlongatedPdfWhereInput[]
    createdAt?: DateTimeFilter<"ProlongatedPdf"> | Date | string
    updatedAt?: DateTimeFilter<"ProlongatedPdf"> | Date | string
    postId?: StringFilter<"ProlongatedPdf"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "url">

  export type ProlongatedPdfOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    _count?: ProlongatedPdfCountOrderByAggregateInput
    _max?: ProlongatedPdfMaxOrderByAggregateInput
    _min?: ProlongatedPdfMinOrderByAggregateInput
  }

  export type ProlongatedPdfScalarWhereWithAggregatesInput = {
    AND?: ProlongatedPdfScalarWhereWithAggregatesInput | ProlongatedPdfScalarWhereWithAggregatesInput[]
    OR?: ProlongatedPdfScalarWhereWithAggregatesInput[]
    NOT?: ProlongatedPdfScalarWhereWithAggregatesInput | ProlongatedPdfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProlongatedPdf"> | string
    url?: StringWithAggregatesFilter<"ProlongatedPdf"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProlongatedPdf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProlongatedPdf"> | Date | string
    postId?: StringWithAggregatesFilter<"ProlongatedPdf"> | string
  }

  export type DecisionPdfWhereInput = {
    AND?: DecisionPdfWhereInput | DecisionPdfWhereInput[]
    OR?: DecisionPdfWhereInput[]
    NOT?: DecisionPdfWhereInput | DecisionPdfWhereInput[]
    id?: StringFilter<"DecisionPdf"> | string
    url?: StringFilter<"DecisionPdf"> | string
    createdAt?: DateTimeFilter<"DecisionPdf"> | Date | string
    updatedAt?: DateTimeFilter<"DecisionPdf"> | Date | string
    postId?: StringFilter<"DecisionPdf"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type DecisionPdfOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type DecisionPdfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: DecisionPdfWhereInput | DecisionPdfWhereInput[]
    OR?: DecisionPdfWhereInput[]
    NOT?: DecisionPdfWhereInput | DecisionPdfWhereInput[]
    createdAt?: DateTimeFilter<"DecisionPdf"> | Date | string
    updatedAt?: DateTimeFilter<"DecisionPdf"> | Date | string
    postId?: StringFilter<"DecisionPdf"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "url">

  export type DecisionPdfOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    _count?: DecisionPdfCountOrderByAggregateInput
    _max?: DecisionPdfMaxOrderByAggregateInput
    _min?: DecisionPdfMinOrderByAggregateInput
  }

  export type DecisionPdfScalarWhereWithAggregatesInput = {
    AND?: DecisionPdfScalarWhereWithAggregatesInput | DecisionPdfScalarWhereWithAggregatesInput[]
    OR?: DecisionPdfScalarWhereWithAggregatesInput[]
    NOT?: DecisionPdfScalarWhereWithAggregatesInput | DecisionPdfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DecisionPdf"> | string
    url?: StringWithAggregatesFilter<"DecisionPdf"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DecisionPdf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DecisionPdf"> | Date | string
    postId?: StringWithAggregatesFilter<"DecisionPdf"> | string
  }

  export type ConversationPdfWhereInput = {
    AND?: ConversationPdfWhereInput | ConversationPdfWhereInput[]
    OR?: ConversationPdfWhereInput[]
    NOT?: ConversationPdfWhereInput | ConversationPdfWhereInput[]
    id?: StringFilter<"ConversationPdf"> | string
    url?: StringFilter<"ConversationPdf"> | string
    createdAt?: DateTimeFilter<"ConversationPdf"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationPdf"> | Date | string
    postId?: StringFilter<"ConversationPdf"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ConversationPdfOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type ConversationPdfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: ConversationPdfWhereInput | ConversationPdfWhereInput[]
    OR?: ConversationPdfWhereInput[]
    NOT?: ConversationPdfWhereInput | ConversationPdfWhereInput[]
    createdAt?: DateTimeFilter<"ConversationPdf"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationPdf"> | Date | string
    postId?: StringFilter<"ConversationPdf"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "url">

  export type ConversationPdfOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    _count?: ConversationPdfCountOrderByAggregateInput
    _max?: ConversationPdfMaxOrderByAggregateInput
    _min?: ConversationPdfMinOrderByAggregateInput
  }

  export type ConversationPdfScalarWhereWithAggregatesInput = {
    AND?: ConversationPdfScalarWhereWithAggregatesInput | ConversationPdfScalarWhereWithAggregatesInput[]
    OR?: ConversationPdfScalarWhereWithAggregatesInput[]
    NOT?: ConversationPdfScalarWhereWithAggregatesInput | ConversationPdfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversationPdf"> | string
    url?: StringWithAggregatesFilter<"ConversationPdf"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConversationPdf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConversationPdf"> | Date | string
    postId?: StringWithAggregatesFilter<"ConversationPdf"> | string
  }

  export type PostCreateInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfCreateNestedOneWithoutPostInput
    conversationPdf?: ConversationPdfCreateNestedManyWithoutPostInput
    prolongationPdf?: ProlongatedPdfCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedCreateNestedOneWithoutPostInput
    conversationPdf?: ConversationPdfUncheckedCreateNestedManyWithoutPostInput
    prolongationPdf?: ProlongatedPdfUncheckedCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUpdateOneWithoutPostNestedInput
    conversationPdf?: ConversationPdfUpdateManyWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedUpdateOneWithoutPostNestedInput
    conversationPdf?: ConversationPdfUncheckedUpdateManyWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUncheckedUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
  }

  export type InitialPdfCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutInitialPdfInput
  }

  export type InitialPdfUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type InitialPdfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutInitialPdfNestedInput
  }

  export type InitialPdfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type InitialPdfCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type InitialPdfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InitialPdfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ProlongatedPdfCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutProlongationPdfInput
  }

  export type ProlongatedPdfUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type ProlongatedPdfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutProlongationPdfNestedInput
  }

  export type ProlongatedPdfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ProlongatedPdfCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type ProlongatedPdfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProlongatedPdfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionPdfCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutDecisionPdfInput
  }

  export type DecisionPdfUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type DecisionPdfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutDecisionPdfNestedInput
  }

  export type DecisionPdfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionPdfCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type DecisionPdfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionPdfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationPdfCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutConversationPdfInput
  }

  export type ConversationPdfUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type ConversationPdfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutConversationPdfNestedInput
  }

  export type ConversationPdfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationPdfCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
  }

  export type ConversationPdfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationPdfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type InitialPdfNullableScalarRelationFilter = {
    is?: InitialPdfWhereInput | null
    isNot?: InitialPdfWhereInput | null
  }

  export type ConversationPdfListRelationFilter = {
    every?: ConversationPdfWhereInput
    some?: ConversationPdfWhereInput
    none?: ConversationPdfWhereInput
  }

  export type ProlongatedPdfListRelationFilter = {
    every?: ProlongatedPdfWhereInput
    some?: ProlongatedPdfWhereInput
    none?: ProlongatedPdfWhereInput
  }

  export type DecisionPdfListRelationFilter = {
    every?: DecisionPdfWhereInput
    some?: DecisionPdfWhereInput
    none?: DecisionPdfWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversationPdfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProlongatedPdfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DecisionPdfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    initDate?: SortOrder
    caseNumber?: SortOrder
    partyType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    initDate?: SortOrder
    caseNumber?: SortOrder
    partyType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    initDate?: SortOrder
    caseNumber?: SortOrder
    partyType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type InitialPdfCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type InitialPdfMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type InitialPdfMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ProlongatedPdfCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ProlongatedPdfMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ProlongatedPdfMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type DecisionPdfCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type DecisionPdfMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type DecisionPdfMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ConversationPdfCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ConversationPdfMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type ConversationPdfMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
  }

  export type InitialPdfCreateNestedOneWithoutPostInput = {
    create?: XOR<InitialPdfCreateWithoutPostInput, InitialPdfUncheckedCreateWithoutPostInput>
    connectOrCreate?: InitialPdfCreateOrConnectWithoutPostInput
    connect?: InitialPdfWhereUniqueInput
  }

  export type ConversationPdfCreateNestedManyWithoutPostInput = {
    create?: XOR<ConversationPdfCreateWithoutPostInput, ConversationPdfUncheckedCreateWithoutPostInput> | ConversationPdfCreateWithoutPostInput[] | ConversationPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConversationPdfCreateOrConnectWithoutPostInput | ConversationPdfCreateOrConnectWithoutPostInput[]
    createMany?: ConversationPdfCreateManyPostInputEnvelope
    connect?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
  }

  export type ProlongatedPdfCreateNestedManyWithoutPostInput = {
    create?: XOR<ProlongatedPdfCreateWithoutPostInput, ProlongatedPdfUncheckedCreateWithoutPostInput> | ProlongatedPdfCreateWithoutPostInput[] | ProlongatedPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProlongatedPdfCreateOrConnectWithoutPostInput | ProlongatedPdfCreateOrConnectWithoutPostInput[]
    createMany?: ProlongatedPdfCreateManyPostInputEnvelope
    connect?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
  }

  export type DecisionPdfCreateNestedManyWithoutPostInput = {
    create?: XOR<DecisionPdfCreateWithoutPostInput, DecisionPdfUncheckedCreateWithoutPostInput> | DecisionPdfCreateWithoutPostInput[] | DecisionPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: DecisionPdfCreateOrConnectWithoutPostInput | DecisionPdfCreateOrConnectWithoutPostInput[]
    createMany?: DecisionPdfCreateManyPostInputEnvelope
    connect?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
  }

  export type InitialPdfUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<InitialPdfCreateWithoutPostInput, InitialPdfUncheckedCreateWithoutPostInput>
    connectOrCreate?: InitialPdfCreateOrConnectWithoutPostInput
    connect?: InitialPdfWhereUniqueInput
  }

  export type ConversationPdfUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ConversationPdfCreateWithoutPostInput, ConversationPdfUncheckedCreateWithoutPostInput> | ConversationPdfCreateWithoutPostInput[] | ConversationPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConversationPdfCreateOrConnectWithoutPostInput | ConversationPdfCreateOrConnectWithoutPostInput[]
    createMany?: ConversationPdfCreateManyPostInputEnvelope
    connect?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
  }

  export type ProlongatedPdfUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ProlongatedPdfCreateWithoutPostInput, ProlongatedPdfUncheckedCreateWithoutPostInput> | ProlongatedPdfCreateWithoutPostInput[] | ProlongatedPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProlongatedPdfCreateOrConnectWithoutPostInput | ProlongatedPdfCreateOrConnectWithoutPostInput[]
    createMany?: ProlongatedPdfCreateManyPostInputEnvelope
    connect?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
  }

  export type DecisionPdfUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<DecisionPdfCreateWithoutPostInput, DecisionPdfUncheckedCreateWithoutPostInput> | DecisionPdfCreateWithoutPostInput[] | DecisionPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: DecisionPdfCreateOrConnectWithoutPostInput | DecisionPdfCreateOrConnectWithoutPostInput[]
    createMany?: DecisionPdfCreateManyPostInputEnvelope
    connect?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type InitialPdfUpdateOneWithoutPostNestedInput = {
    create?: XOR<InitialPdfCreateWithoutPostInput, InitialPdfUncheckedCreateWithoutPostInput>
    connectOrCreate?: InitialPdfCreateOrConnectWithoutPostInput
    upsert?: InitialPdfUpsertWithoutPostInput
    disconnect?: InitialPdfWhereInput | boolean
    delete?: InitialPdfWhereInput | boolean
    connect?: InitialPdfWhereUniqueInput
    update?: XOR<XOR<InitialPdfUpdateToOneWithWhereWithoutPostInput, InitialPdfUpdateWithoutPostInput>, InitialPdfUncheckedUpdateWithoutPostInput>
  }

  export type ConversationPdfUpdateManyWithoutPostNestedInput = {
    create?: XOR<ConversationPdfCreateWithoutPostInput, ConversationPdfUncheckedCreateWithoutPostInput> | ConversationPdfCreateWithoutPostInput[] | ConversationPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConversationPdfCreateOrConnectWithoutPostInput | ConversationPdfCreateOrConnectWithoutPostInput[]
    upsert?: ConversationPdfUpsertWithWhereUniqueWithoutPostInput | ConversationPdfUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ConversationPdfCreateManyPostInputEnvelope
    set?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    disconnect?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    delete?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    connect?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    update?: ConversationPdfUpdateWithWhereUniqueWithoutPostInput | ConversationPdfUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ConversationPdfUpdateManyWithWhereWithoutPostInput | ConversationPdfUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ConversationPdfScalarWhereInput | ConversationPdfScalarWhereInput[]
  }

  export type ProlongatedPdfUpdateManyWithoutPostNestedInput = {
    create?: XOR<ProlongatedPdfCreateWithoutPostInput, ProlongatedPdfUncheckedCreateWithoutPostInput> | ProlongatedPdfCreateWithoutPostInput[] | ProlongatedPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProlongatedPdfCreateOrConnectWithoutPostInput | ProlongatedPdfCreateOrConnectWithoutPostInput[]
    upsert?: ProlongatedPdfUpsertWithWhereUniqueWithoutPostInput | ProlongatedPdfUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ProlongatedPdfCreateManyPostInputEnvelope
    set?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    disconnect?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    delete?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    connect?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    update?: ProlongatedPdfUpdateWithWhereUniqueWithoutPostInput | ProlongatedPdfUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ProlongatedPdfUpdateManyWithWhereWithoutPostInput | ProlongatedPdfUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ProlongatedPdfScalarWhereInput | ProlongatedPdfScalarWhereInput[]
  }

  export type DecisionPdfUpdateManyWithoutPostNestedInput = {
    create?: XOR<DecisionPdfCreateWithoutPostInput, DecisionPdfUncheckedCreateWithoutPostInput> | DecisionPdfCreateWithoutPostInput[] | DecisionPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: DecisionPdfCreateOrConnectWithoutPostInput | DecisionPdfCreateOrConnectWithoutPostInput[]
    upsert?: DecisionPdfUpsertWithWhereUniqueWithoutPostInput | DecisionPdfUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: DecisionPdfCreateManyPostInputEnvelope
    set?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    disconnect?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    delete?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    connect?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    update?: DecisionPdfUpdateWithWhereUniqueWithoutPostInput | DecisionPdfUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: DecisionPdfUpdateManyWithWhereWithoutPostInput | DecisionPdfUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: DecisionPdfScalarWhereInput | DecisionPdfScalarWhereInput[]
  }

  export type InitialPdfUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<InitialPdfCreateWithoutPostInput, InitialPdfUncheckedCreateWithoutPostInput>
    connectOrCreate?: InitialPdfCreateOrConnectWithoutPostInput
    upsert?: InitialPdfUpsertWithoutPostInput
    disconnect?: InitialPdfWhereInput | boolean
    delete?: InitialPdfWhereInput | boolean
    connect?: InitialPdfWhereUniqueInput
    update?: XOR<XOR<InitialPdfUpdateToOneWithWhereWithoutPostInput, InitialPdfUpdateWithoutPostInput>, InitialPdfUncheckedUpdateWithoutPostInput>
  }

  export type ConversationPdfUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ConversationPdfCreateWithoutPostInput, ConversationPdfUncheckedCreateWithoutPostInput> | ConversationPdfCreateWithoutPostInput[] | ConversationPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConversationPdfCreateOrConnectWithoutPostInput | ConversationPdfCreateOrConnectWithoutPostInput[]
    upsert?: ConversationPdfUpsertWithWhereUniqueWithoutPostInput | ConversationPdfUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ConversationPdfCreateManyPostInputEnvelope
    set?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    disconnect?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    delete?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    connect?: ConversationPdfWhereUniqueInput | ConversationPdfWhereUniqueInput[]
    update?: ConversationPdfUpdateWithWhereUniqueWithoutPostInput | ConversationPdfUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ConversationPdfUpdateManyWithWhereWithoutPostInput | ConversationPdfUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ConversationPdfScalarWhereInput | ConversationPdfScalarWhereInput[]
  }

  export type ProlongatedPdfUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ProlongatedPdfCreateWithoutPostInput, ProlongatedPdfUncheckedCreateWithoutPostInput> | ProlongatedPdfCreateWithoutPostInput[] | ProlongatedPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ProlongatedPdfCreateOrConnectWithoutPostInput | ProlongatedPdfCreateOrConnectWithoutPostInput[]
    upsert?: ProlongatedPdfUpsertWithWhereUniqueWithoutPostInput | ProlongatedPdfUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ProlongatedPdfCreateManyPostInputEnvelope
    set?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    disconnect?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    delete?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    connect?: ProlongatedPdfWhereUniqueInput | ProlongatedPdfWhereUniqueInput[]
    update?: ProlongatedPdfUpdateWithWhereUniqueWithoutPostInput | ProlongatedPdfUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ProlongatedPdfUpdateManyWithWhereWithoutPostInput | ProlongatedPdfUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ProlongatedPdfScalarWhereInput | ProlongatedPdfScalarWhereInput[]
  }

  export type DecisionPdfUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<DecisionPdfCreateWithoutPostInput, DecisionPdfUncheckedCreateWithoutPostInput> | DecisionPdfCreateWithoutPostInput[] | DecisionPdfUncheckedCreateWithoutPostInput[]
    connectOrCreate?: DecisionPdfCreateOrConnectWithoutPostInput | DecisionPdfCreateOrConnectWithoutPostInput[]
    upsert?: DecisionPdfUpsertWithWhereUniqueWithoutPostInput | DecisionPdfUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: DecisionPdfCreateManyPostInputEnvelope
    set?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    disconnect?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    delete?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    connect?: DecisionPdfWhereUniqueInput | DecisionPdfWhereUniqueInput[]
    update?: DecisionPdfUpdateWithWhereUniqueWithoutPostInput | DecisionPdfUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: DecisionPdfUpdateManyWithWhereWithoutPostInput | DecisionPdfUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: DecisionPdfScalarWhereInput | DecisionPdfScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutInitialPdfInput = {
    create?: XOR<PostCreateWithoutInitialPdfInput, PostUncheckedCreateWithoutInitialPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutInitialPdfInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutInitialPdfNestedInput = {
    create?: XOR<PostCreateWithoutInitialPdfInput, PostUncheckedCreateWithoutInitialPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutInitialPdfInput
    upsert?: PostUpsertWithoutInitialPdfInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutInitialPdfInput, PostUpdateWithoutInitialPdfInput>, PostUncheckedUpdateWithoutInitialPdfInput>
  }

  export type PostCreateNestedOneWithoutProlongationPdfInput = {
    create?: XOR<PostCreateWithoutProlongationPdfInput, PostUncheckedCreateWithoutProlongationPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutProlongationPdfInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutProlongationPdfNestedInput = {
    create?: XOR<PostCreateWithoutProlongationPdfInput, PostUncheckedCreateWithoutProlongationPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutProlongationPdfInput
    upsert?: PostUpsertWithoutProlongationPdfInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutProlongationPdfInput, PostUpdateWithoutProlongationPdfInput>, PostUncheckedUpdateWithoutProlongationPdfInput>
  }

  export type PostCreateNestedOneWithoutDecisionPdfInput = {
    create?: XOR<PostCreateWithoutDecisionPdfInput, PostUncheckedCreateWithoutDecisionPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutDecisionPdfInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutDecisionPdfNestedInput = {
    create?: XOR<PostCreateWithoutDecisionPdfInput, PostUncheckedCreateWithoutDecisionPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutDecisionPdfInput
    upsert?: PostUpsertWithoutDecisionPdfInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutDecisionPdfInput, PostUpdateWithoutDecisionPdfInput>, PostUncheckedUpdateWithoutDecisionPdfInput>
  }

  export type PostCreateNestedOneWithoutConversationPdfInput = {
    create?: XOR<PostCreateWithoutConversationPdfInput, PostUncheckedCreateWithoutConversationPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutConversationPdfInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutConversationPdfNestedInput = {
    create?: XOR<PostCreateWithoutConversationPdfInput, PostUncheckedCreateWithoutConversationPdfInput>
    connectOrCreate?: PostCreateOrConnectWithoutConversationPdfInput
    upsert?: PostUpsertWithoutConversationPdfInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutConversationPdfInput, PostUpdateWithoutConversationPdfInput>, PostUncheckedUpdateWithoutConversationPdfInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type InitialPdfCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InitialPdfUncheckedCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InitialPdfCreateOrConnectWithoutPostInput = {
    where: InitialPdfWhereUniqueInput
    create: XOR<InitialPdfCreateWithoutPostInput, InitialPdfUncheckedCreateWithoutPostInput>
  }

  export type ConversationPdfCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationPdfUncheckedCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationPdfCreateOrConnectWithoutPostInput = {
    where: ConversationPdfWhereUniqueInput
    create: XOR<ConversationPdfCreateWithoutPostInput, ConversationPdfUncheckedCreateWithoutPostInput>
  }

  export type ConversationPdfCreateManyPostInputEnvelope = {
    data: ConversationPdfCreateManyPostInput | ConversationPdfCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ProlongatedPdfCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProlongatedPdfUncheckedCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProlongatedPdfCreateOrConnectWithoutPostInput = {
    where: ProlongatedPdfWhereUniqueInput
    create: XOR<ProlongatedPdfCreateWithoutPostInput, ProlongatedPdfUncheckedCreateWithoutPostInput>
  }

  export type ProlongatedPdfCreateManyPostInputEnvelope = {
    data: ProlongatedPdfCreateManyPostInput | ProlongatedPdfCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type DecisionPdfCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecisionPdfUncheckedCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecisionPdfCreateOrConnectWithoutPostInput = {
    where: DecisionPdfWhereUniqueInput
    create: XOR<DecisionPdfCreateWithoutPostInput, DecisionPdfUncheckedCreateWithoutPostInput>
  }

  export type DecisionPdfCreateManyPostInputEnvelope = {
    data: DecisionPdfCreateManyPostInput | DecisionPdfCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type InitialPdfUpsertWithoutPostInput = {
    update: XOR<InitialPdfUpdateWithoutPostInput, InitialPdfUncheckedUpdateWithoutPostInput>
    create: XOR<InitialPdfCreateWithoutPostInput, InitialPdfUncheckedCreateWithoutPostInput>
    where?: InitialPdfWhereInput
  }

  export type InitialPdfUpdateToOneWithWhereWithoutPostInput = {
    where?: InitialPdfWhereInput
    data: XOR<InitialPdfUpdateWithoutPostInput, InitialPdfUncheckedUpdateWithoutPostInput>
  }

  export type InitialPdfUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InitialPdfUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationPdfUpsertWithWhereUniqueWithoutPostInput = {
    where: ConversationPdfWhereUniqueInput
    update: XOR<ConversationPdfUpdateWithoutPostInput, ConversationPdfUncheckedUpdateWithoutPostInput>
    create: XOR<ConversationPdfCreateWithoutPostInput, ConversationPdfUncheckedCreateWithoutPostInput>
  }

  export type ConversationPdfUpdateWithWhereUniqueWithoutPostInput = {
    where: ConversationPdfWhereUniqueInput
    data: XOR<ConversationPdfUpdateWithoutPostInput, ConversationPdfUncheckedUpdateWithoutPostInput>
  }

  export type ConversationPdfUpdateManyWithWhereWithoutPostInput = {
    where: ConversationPdfScalarWhereInput
    data: XOR<ConversationPdfUpdateManyMutationInput, ConversationPdfUncheckedUpdateManyWithoutPostInput>
  }

  export type ConversationPdfScalarWhereInput = {
    AND?: ConversationPdfScalarWhereInput | ConversationPdfScalarWhereInput[]
    OR?: ConversationPdfScalarWhereInput[]
    NOT?: ConversationPdfScalarWhereInput | ConversationPdfScalarWhereInput[]
    id?: StringFilter<"ConversationPdf"> | string
    url?: StringFilter<"ConversationPdf"> | string
    createdAt?: DateTimeFilter<"ConversationPdf"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationPdf"> | Date | string
    postId?: StringFilter<"ConversationPdf"> | string
  }

  export type ProlongatedPdfUpsertWithWhereUniqueWithoutPostInput = {
    where: ProlongatedPdfWhereUniqueInput
    update: XOR<ProlongatedPdfUpdateWithoutPostInput, ProlongatedPdfUncheckedUpdateWithoutPostInput>
    create: XOR<ProlongatedPdfCreateWithoutPostInput, ProlongatedPdfUncheckedCreateWithoutPostInput>
  }

  export type ProlongatedPdfUpdateWithWhereUniqueWithoutPostInput = {
    where: ProlongatedPdfWhereUniqueInput
    data: XOR<ProlongatedPdfUpdateWithoutPostInput, ProlongatedPdfUncheckedUpdateWithoutPostInput>
  }

  export type ProlongatedPdfUpdateManyWithWhereWithoutPostInput = {
    where: ProlongatedPdfScalarWhereInput
    data: XOR<ProlongatedPdfUpdateManyMutationInput, ProlongatedPdfUncheckedUpdateManyWithoutPostInput>
  }

  export type ProlongatedPdfScalarWhereInput = {
    AND?: ProlongatedPdfScalarWhereInput | ProlongatedPdfScalarWhereInput[]
    OR?: ProlongatedPdfScalarWhereInput[]
    NOT?: ProlongatedPdfScalarWhereInput | ProlongatedPdfScalarWhereInput[]
    id?: StringFilter<"ProlongatedPdf"> | string
    url?: StringFilter<"ProlongatedPdf"> | string
    createdAt?: DateTimeFilter<"ProlongatedPdf"> | Date | string
    updatedAt?: DateTimeFilter<"ProlongatedPdf"> | Date | string
    postId?: StringFilter<"ProlongatedPdf"> | string
  }

  export type DecisionPdfUpsertWithWhereUniqueWithoutPostInput = {
    where: DecisionPdfWhereUniqueInput
    update: XOR<DecisionPdfUpdateWithoutPostInput, DecisionPdfUncheckedUpdateWithoutPostInput>
    create: XOR<DecisionPdfCreateWithoutPostInput, DecisionPdfUncheckedCreateWithoutPostInput>
  }

  export type DecisionPdfUpdateWithWhereUniqueWithoutPostInput = {
    where: DecisionPdfWhereUniqueInput
    data: XOR<DecisionPdfUpdateWithoutPostInput, DecisionPdfUncheckedUpdateWithoutPostInput>
  }

  export type DecisionPdfUpdateManyWithWhereWithoutPostInput = {
    where: DecisionPdfScalarWhereInput
    data: XOR<DecisionPdfUpdateManyMutationInput, DecisionPdfUncheckedUpdateManyWithoutPostInput>
  }

  export type DecisionPdfScalarWhereInput = {
    AND?: DecisionPdfScalarWhereInput | DecisionPdfScalarWhereInput[]
    OR?: DecisionPdfScalarWhereInput[]
    NOT?: DecisionPdfScalarWhereInput | DecisionPdfScalarWhereInput[]
    id?: StringFilter<"DecisionPdf"> | string
    url?: StringFilter<"DecisionPdf"> | string
    createdAt?: DateTimeFilter<"DecisionPdf"> | Date | string
    updatedAt?: DateTimeFilter<"DecisionPdf"> | Date | string
    postId?: StringFilter<"DecisionPdf"> | string
  }

  export type PostCreateWithoutInitialPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    conversationPdf?: ConversationPdfCreateNestedManyWithoutPostInput
    prolongationPdf?: ProlongatedPdfCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutInitialPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    conversationPdf?: ConversationPdfUncheckedCreateNestedManyWithoutPostInput
    prolongationPdf?: ProlongatedPdfUncheckedCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutInitialPdfInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutInitialPdfInput, PostUncheckedCreateWithoutInitialPdfInput>
  }

  export type PostUpsertWithoutInitialPdfInput = {
    update: XOR<PostUpdateWithoutInitialPdfInput, PostUncheckedUpdateWithoutInitialPdfInput>
    create: XOR<PostCreateWithoutInitialPdfInput, PostUncheckedCreateWithoutInitialPdfInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutInitialPdfInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutInitialPdfInput, PostUncheckedUpdateWithoutInitialPdfInput>
  }

  export type PostUpdateWithoutInitialPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    conversationPdf?: ConversationPdfUpdateManyWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutInitialPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    conversationPdf?: ConversationPdfUncheckedUpdateManyWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUncheckedUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutProlongationPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfCreateNestedOneWithoutPostInput
    conversationPdf?: ConversationPdfCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutProlongationPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedCreateNestedOneWithoutPostInput
    conversationPdf?: ConversationPdfUncheckedCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutProlongationPdfInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutProlongationPdfInput, PostUncheckedCreateWithoutProlongationPdfInput>
  }

  export type PostUpsertWithoutProlongationPdfInput = {
    update: XOR<PostUpdateWithoutProlongationPdfInput, PostUncheckedUpdateWithoutProlongationPdfInput>
    create: XOR<PostCreateWithoutProlongationPdfInput, PostUncheckedCreateWithoutProlongationPdfInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutProlongationPdfInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutProlongationPdfInput, PostUncheckedUpdateWithoutProlongationPdfInput>
  }

  export type PostUpdateWithoutProlongationPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUpdateOneWithoutPostNestedInput
    conversationPdf?: ConversationPdfUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutProlongationPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedUpdateOneWithoutPostNestedInput
    conversationPdf?: ConversationPdfUncheckedUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutDecisionPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfCreateNestedOneWithoutPostInput
    conversationPdf?: ConversationPdfCreateNestedManyWithoutPostInput
    prolongationPdf?: ProlongatedPdfCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutDecisionPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedCreateNestedOneWithoutPostInput
    conversationPdf?: ConversationPdfUncheckedCreateNestedManyWithoutPostInput
    prolongationPdf?: ProlongatedPdfUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutDecisionPdfInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutDecisionPdfInput, PostUncheckedCreateWithoutDecisionPdfInput>
  }

  export type PostUpsertWithoutDecisionPdfInput = {
    update: XOR<PostUpdateWithoutDecisionPdfInput, PostUncheckedUpdateWithoutDecisionPdfInput>
    create: XOR<PostCreateWithoutDecisionPdfInput, PostUncheckedCreateWithoutDecisionPdfInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutDecisionPdfInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutDecisionPdfInput, PostUncheckedUpdateWithoutDecisionPdfInput>
  }

  export type PostUpdateWithoutDecisionPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUpdateOneWithoutPostNestedInput
    conversationPdf?: ConversationPdfUpdateManyWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutDecisionPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedUpdateOneWithoutPostNestedInput
    conversationPdf?: ConversationPdfUncheckedUpdateManyWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutConversationPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfCreateNestedOneWithoutPostInput
    prolongationPdf?: ProlongatedPdfCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutConversationPdfInput = {
    id?: string
    name: string
    initDate?: string | null
    caseNumber?: string
    partyType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedCreateNestedOneWithoutPostInput
    prolongationPdf?: ProlongatedPdfUncheckedCreateNestedManyWithoutPostInput
    decisionPdf?: DecisionPdfUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutConversationPdfInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutConversationPdfInput, PostUncheckedCreateWithoutConversationPdfInput>
  }

  export type PostUpsertWithoutConversationPdfInput = {
    update: XOR<PostUpdateWithoutConversationPdfInput, PostUncheckedUpdateWithoutConversationPdfInput>
    create: XOR<PostCreateWithoutConversationPdfInput, PostUncheckedCreateWithoutConversationPdfInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutConversationPdfInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutConversationPdfInput, PostUncheckedUpdateWithoutConversationPdfInput>
  }

  export type PostUpdateWithoutConversationPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUpdateOneWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutConversationPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initDate?: NullableStringFieldUpdateOperationsInput | string | null
    caseNumber?: StringFieldUpdateOperationsInput | string
    partyType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    initialPdf?: InitialPdfUncheckedUpdateOneWithoutPostNestedInput
    prolongationPdf?: ProlongatedPdfUncheckedUpdateManyWithoutPostNestedInput
    decisionPdf?: DecisionPdfUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ConversationPdfCreateManyPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProlongatedPdfCreateManyPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecisionPdfCreateManyPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationPdfUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationPdfUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationPdfUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProlongatedPdfUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProlongatedPdfUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProlongatedPdfUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionPdfUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionPdfUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionPdfUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}