
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
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model VideoSection
 * 
 */
export type VideoSection = $Result.DefaultSelection<Prisma.$VideoSectionPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model EnrolledStudents
 * 
 */
export type EnrolledStudents = $Result.DefaultSelection<Prisma.$EnrolledStudentsPayload>
/**
 * Model CourseProgress
 * 
 */
export type CourseProgress = $Result.DefaultSelection<Prisma.$CourseProgressPayload>
/**
 * Model SectionProgress
 * 
 */
export type SectionProgress = $Result.DefaultSelection<Prisma.$SectionProgressPayload>
/**
 * Model VideoProgress
 * 
 */
export type VideoProgress = $Result.DefaultSelection<Prisma.$VideoProgressPayload>
/**
 * Model FilterPreset
 * 
 */
export type FilterPreset = $Result.DefaultSelection<Prisma.$FilterPresetPayload>
/**
 * Model SavedFilterData
 * 
 */
export type SavedFilterData = $Result.DefaultSelection<Prisma.$SavedFilterDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const payment_status: {
  PENDING: 'PENDING',
  CAPTURED: 'CAPTURED',
  FAILED: 'FAILED'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]

}

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoSection`: Exposes CRUD operations for the **VideoSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoSections
    * const videoSections = await prisma.videoSection.findMany()
    * ```
    */
  get videoSection(): Prisma.VideoSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrolledStudents`: Exposes CRUD operations for the **EnrolledStudents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrolledStudents
    * const enrolledStudents = await prisma.enrolledStudents.findMany()
    * ```
    */
  get enrolledStudents(): Prisma.EnrolledStudentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseProgress`: Exposes CRUD operations for the **CourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseProgresses
    * const courseProgresses = await prisma.courseProgress.findMany()
    * ```
    */
  get courseProgress(): Prisma.CourseProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectionProgress`: Exposes CRUD operations for the **SectionProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionProgresses
    * const sectionProgresses = await prisma.sectionProgress.findMany()
    * ```
    */
  get sectionProgress(): Prisma.SectionProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoProgress`: Exposes CRUD operations for the **VideoProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoProgresses
    * const videoProgresses = await prisma.videoProgress.findMany()
    * ```
    */
  get videoProgress(): Prisma.VideoProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filterPreset`: Exposes CRUD operations for the **FilterPreset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilterPresets
    * const filterPresets = await prisma.filterPreset.findMany()
    * ```
    */
  get filterPreset(): Prisma.FilterPresetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedFilterData`: Exposes CRUD operations for the **SavedFilterData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedFilterData
    * const savedFilterData = await prisma.savedFilterData.findMany()
    * ```
    */
  get savedFilterData(): Prisma.SavedFilterDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Course: 'Course',
    Section: 'Section',
    VideoSection: 'VideoSection',
    Rating: 'Rating',
    EnrolledStudents: 'EnrolledStudents',
    CourseProgress: 'CourseProgress',
    SectionProgress: 'SectionProgress',
    VideoProgress: 'VideoProgress',
    FilterPreset: 'FilterPreset',
    SavedFilterData: 'SavedFilterData'
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
      modelProps: "course" | "section" | "videoSection" | "rating" | "enrolledStudents" | "courseProgress" | "sectionProgress" | "videoProgress" | "filterPreset" | "savedFilterData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      VideoSection: {
        payload: Prisma.$VideoSectionPayload<ExtArgs>
        fields: Prisma.VideoSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>
          }
          findFirst: {
            args: Prisma.VideoSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>
          }
          findMany: {
            args: Prisma.VideoSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>[]
          }
          create: {
            args: Prisma.VideoSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>
          }
          createMany: {
            args: Prisma.VideoSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>[]
          }
          delete: {
            args: Prisma.VideoSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>
          }
          update: {
            args: Prisma.VideoSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>
          }
          deleteMany: {
            args: Prisma.VideoSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>[]
          }
          upsert: {
            args: Prisma.VideoSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSectionPayload>
          }
          aggregate: {
            args: Prisma.VideoSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoSection>
          }
          groupBy: {
            args: Prisma.VideoSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoSectionCountArgs<ExtArgs>
            result: $Utils.Optional<VideoSectionCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      EnrolledStudents: {
        payload: Prisma.$EnrolledStudentsPayload<ExtArgs>
        fields: Prisma.EnrolledStudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrolledStudentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrolledStudentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>
          }
          findFirst: {
            args: Prisma.EnrolledStudentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrolledStudentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>
          }
          findMany: {
            args: Prisma.EnrolledStudentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>[]
          }
          create: {
            args: Prisma.EnrolledStudentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>
          }
          createMany: {
            args: Prisma.EnrolledStudentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrolledStudentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>[]
          }
          delete: {
            args: Prisma.EnrolledStudentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>
          }
          update: {
            args: Prisma.EnrolledStudentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>
          }
          deleteMany: {
            args: Prisma.EnrolledStudentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrolledStudentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrolledStudentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>[]
          }
          upsert: {
            args: Prisma.EnrolledStudentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledStudentsPayload>
          }
          aggregate: {
            args: Prisma.EnrolledStudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrolledStudents>
          }
          groupBy: {
            args: Prisma.EnrolledStudentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrolledStudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrolledStudentsCountArgs<ExtArgs>
            result: $Utils.Optional<EnrolledStudentsCountAggregateOutputType> | number
          }
        }
      }
      CourseProgress: {
        payload: Prisma.$CourseProgressPayload<ExtArgs>
        fields: Prisma.CourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findFirst: {
            args: Prisma.CourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findMany: {
            args: Prisma.CourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          create: {
            args: Prisma.CourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          createMany: {
            args: Prisma.CourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          delete: {
            args: Prisma.CourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          update: {
            args: Prisma.CourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.CourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          upsert: {
            args: Prisma.CourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          aggregate: {
            args: Prisma.CourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseProgress>
          }
          groupBy: {
            args: Prisma.CourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressCountAggregateOutputType> | number
          }
        }
      }
      SectionProgress: {
        payload: Prisma.$SectionProgressPayload<ExtArgs>
        fields: Prisma.SectionProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>
          }
          findFirst: {
            args: Prisma.SectionProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>
          }
          findMany: {
            args: Prisma.SectionProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>[]
          }
          create: {
            args: Prisma.SectionProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>
          }
          createMany: {
            args: Prisma.SectionProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>[]
          }
          delete: {
            args: Prisma.SectionProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>
          }
          update: {
            args: Prisma.SectionProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>
          }
          deleteMany: {
            args: Prisma.SectionProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>[]
          }
          upsert: {
            args: Prisma.SectionProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionProgressPayload>
          }
          aggregate: {
            args: Prisma.SectionProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionProgress>
          }
          groupBy: {
            args: Prisma.SectionProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionProgressCountArgs<ExtArgs>
            result: $Utils.Optional<SectionProgressCountAggregateOutputType> | number
          }
        }
      }
      VideoProgress: {
        payload: Prisma.$VideoProgressPayload<ExtArgs>
        fields: Prisma.VideoProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          findFirst: {
            args: Prisma.VideoProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          findMany: {
            args: Prisma.VideoProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>[]
          }
          create: {
            args: Prisma.VideoProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          createMany: {
            args: Prisma.VideoProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>[]
          }
          delete: {
            args: Prisma.VideoProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          update: {
            args: Prisma.VideoProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          deleteMany: {
            args: Prisma.VideoProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>[]
          }
          upsert: {
            args: Prisma.VideoProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProgressPayload>
          }
          aggregate: {
            args: Prisma.VideoProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoProgress>
          }
          groupBy: {
            args: Prisma.VideoProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoProgressCountArgs<ExtArgs>
            result: $Utils.Optional<VideoProgressCountAggregateOutputType> | number
          }
        }
      }
      FilterPreset: {
        payload: Prisma.$FilterPresetPayload<ExtArgs>
        fields: Prisma.FilterPresetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterPresetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterPresetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>
          }
          findFirst: {
            args: Prisma.FilterPresetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterPresetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>
          }
          findMany: {
            args: Prisma.FilterPresetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>[]
          }
          create: {
            args: Prisma.FilterPresetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>
          }
          createMany: {
            args: Prisma.FilterPresetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilterPresetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>[]
          }
          delete: {
            args: Prisma.FilterPresetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>
          }
          update: {
            args: Prisma.FilterPresetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>
          }
          deleteMany: {
            args: Prisma.FilterPresetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterPresetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilterPresetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>[]
          }
          upsert: {
            args: Prisma.FilterPresetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPresetPayload>
          }
          aggregate: {
            args: Prisma.FilterPresetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilterPreset>
          }
          groupBy: {
            args: Prisma.FilterPresetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterPresetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilterPresetCountArgs<ExtArgs>
            result: $Utils.Optional<FilterPresetCountAggregateOutputType> | number
          }
        }
      }
      SavedFilterData: {
        payload: Prisma.$SavedFilterDataPayload<ExtArgs>
        fields: Prisma.SavedFilterDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedFilterDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedFilterDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>
          }
          findFirst: {
            args: Prisma.SavedFilterDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedFilterDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>
          }
          findMany: {
            args: Prisma.SavedFilterDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>[]
          }
          create: {
            args: Prisma.SavedFilterDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>
          }
          createMany: {
            args: Prisma.SavedFilterDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedFilterDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>[]
          }
          delete: {
            args: Prisma.SavedFilterDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>
          }
          update: {
            args: Prisma.SavedFilterDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>
          }
          deleteMany: {
            args: Prisma.SavedFilterDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedFilterDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedFilterDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>[]
          }
          upsert: {
            args: Prisma.SavedFilterDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedFilterDataPayload>
          }
          aggregate: {
            args: Prisma.SavedFilterDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedFilterData>
          }
          groupBy: {
            args: Prisma.SavedFilterDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedFilterDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedFilterDataCountArgs<ExtArgs>
            result: $Utils.Optional<SavedFilterDataCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    course?: CourseOmit
    section?: SectionOmit
    videoSection?: VideoSectionOmit
    rating?: RatingOmit
    enrolledStudents?: EnrolledStudentsOmit
    courseProgress?: CourseProgressOmit
    sectionProgress?: SectionProgressOmit
    videoProgress?: VideoProgressOmit
    filterPreset?: FilterPresetOmit
    savedFilterData?: SavedFilterDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    section: number
    rating: number
    enrolledStudents: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | CourseCountOutputTypeCountSectionArgs
    rating?: boolean | CourseCountOutputTypeCountRatingArgs
    enrolledStudents?: boolean | CourseCountOutputTypeCountEnrolledStudentsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledStudentsWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    videoSection: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoSection?: boolean | SectionCountOutputTypeCountVideoSectionArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountVideoSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoSectionWhereInput
  }


  /**
   * Count Type CourseProgressCountOutputType
   */

  export type CourseProgressCountOutputType = {
    sectionProgress: number
  }

  export type CourseProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionProgress?: boolean | CourseProgressCountOutputTypeCountSectionProgressArgs
  }

  // Custom InputTypes
  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgressCountOutputType
     */
    select?: CourseProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeCountSectionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionProgressWhereInput
  }


  /**
   * Count Type SectionProgressCountOutputType
   */

  export type SectionProgressCountOutputType = {
    videoProgress: number
  }

  export type SectionProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoProgress?: boolean | SectionProgressCountOutputTypeCountVideoProgressArgs
  }

  // Custom InputTypes
  /**
   * SectionProgressCountOutputType without action
   */
  export type SectionProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgressCountOutputType
     */
    select?: SectionProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionProgressCountOutputType without action
   */
  export type SectionProgressCountOutputTypeCountVideoProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoProgressWhereInput
  }


  /**
   * Count Type FilterPresetCountOutputType
   */

  export type FilterPresetCountOutputType = {
    SavedFilterData: number
  }

  export type FilterPresetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SavedFilterData?: boolean | FilterPresetCountOutputTypeCountSavedFilterDataArgs
  }

  // Custom InputTypes
  /**
   * FilterPresetCountOutputType without action
   */
  export type FilterPresetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPresetCountOutputType
     */
    select?: FilterPresetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilterPresetCountOutputType without action
   */
  export type FilterPresetCountOutputTypeCountSavedFilterDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedFilterDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    owner: string | null
    ownerName: string | null
    title: string | null
    description: string | null
    price: number | null
    main_image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    ownerName: string | null
    title: string | null
    description: string | null
    price: number | null
    main_image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    owner: number
    ownerName: number
    title: number
    description: number
    price: number
    main_image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    owner?: true
    ownerName?: true
    title?: true
    description?: true
    price?: true
    main_image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    owner?: true
    ownerName?: true
    title?: true
    description?: true
    price?: true
    main_image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    owner?: true
    ownerName?: true
    title?: true
    description?: true
    price?: true
    main_image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    owner: string
    ownerName: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    ownerName?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    main_image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | Course$sectionArgs<ExtArgs>
    rating?: boolean | Course$ratingArgs<ExtArgs>
    enrolledStudents?: boolean | Course$enrolledStudentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    ownerName?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    main_image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    ownerName?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    main_image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    owner?: boolean
    ownerName?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    main_image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner" | "ownerName" | "title" | "description" | "price" | "main_image" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | Course$sectionArgs<ExtArgs>
    rating?: boolean | Course$ratingArgs<ExtArgs>
    enrolledStudents?: boolean | Course$enrolledStudentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>[]
      rating: Prisma.$RatingPayload<ExtArgs>[]
      enrolledStudents: Prisma.$EnrolledStudentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner: string
      ownerName: string | null
      title: string
      description: string
      price: number
      main_image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends Course$sectionArgs<ExtArgs> = {}>(args?: Subset<T, Course$sectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rating<T extends Course$ratingArgs<ExtArgs> = {}>(args?: Subset<T, Course$ratingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrolledStudents<T extends Course$enrolledStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrolledStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly owner: FieldRef<"Course", 'String'>
    readonly ownerName: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly main_image: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.section
   */
  export type Course$sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Course.rating
   */
  export type Course$ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Course.enrolledStudents
   */
  export type Course$enrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    where?: EnrolledStudentsWhereInput
    orderBy?: EnrolledStudentsOrderByWithRelationInput | EnrolledStudentsOrderByWithRelationInput[]
    cursor?: EnrolledStudentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrolledStudentsScalarFieldEnum | EnrolledStudentsScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    sectionName: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    sectionName: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    sectionName: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    sectionName?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    sectionName?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    sectionName?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    sectionName: string
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionName?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    videoSection?: boolean | Section$videoSectionArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionName?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionName?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    sectionName?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionName" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    videoSection?: boolean | Section$videoSectionArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      videoSection: Prisma.$VideoSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionName: string
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videoSection<T extends Section$videoSectionArgs<ExtArgs> = {}>(args?: Subset<T, Section$videoSectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly sectionName: FieldRef<"Section", 'String'>
    readonly courseId: FieldRef<"Section", 'String'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.videoSection
   */
  export type Section$videoSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    where?: VideoSectionWhereInput
    orderBy?: VideoSectionOrderByWithRelationInput | VideoSectionOrderByWithRelationInput[]
    cursor?: VideoSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoSectionScalarFieldEnum | VideoSectionScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model VideoSection
   */

  export type AggregateVideoSection = {
    _count: VideoSectionCountAggregateOutputType | null
    _avg: VideoSectionAvgAggregateOutputType | null
    _sum: VideoSectionSumAggregateOutputType | null
    _min: VideoSectionMinAggregateOutputType | null
    _max: VideoSectionMaxAggregateOutputType | null
  }

  export type VideoSectionAvgAggregateOutputType = {
    video_duration: number | null
  }

  export type VideoSectionSumAggregateOutputType = {
    video_duration: number | null
  }

  export type VideoSectionMinAggregateOutputType = {
    id: string | null
    video_title: string | null
    video_url: string | null
    video_public_id: string | null
    video_thumbnailUrl: string | null
    video_duration: number | null
    sectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoSectionMaxAggregateOutputType = {
    id: string | null
    video_title: string | null
    video_url: string | null
    video_public_id: string | null
    video_thumbnailUrl: string | null
    video_duration: number | null
    sectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoSectionCountAggregateOutputType = {
    id: number
    video_title: number
    video_url: number
    video_public_id: number
    video_thumbnailUrl: number
    video_duration: number
    sectionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoSectionAvgAggregateInputType = {
    video_duration?: true
  }

  export type VideoSectionSumAggregateInputType = {
    video_duration?: true
  }

  export type VideoSectionMinAggregateInputType = {
    id?: true
    video_title?: true
    video_url?: true
    video_public_id?: true
    video_thumbnailUrl?: true
    video_duration?: true
    sectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoSectionMaxAggregateInputType = {
    id?: true
    video_title?: true
    video_url?: true
    video_public_id?: true
    video_thumbnailUrl?: true
    video_duration?: true
    sectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoSectionCountAggregateInputType = {
    id?: true
    video_title?: true
    video_url?: true
    video_public_id?: true
    video_thumbnailUrl?: true
    video_duration?: true
    sectionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoSection to aggregate.
     */
    where?: VideoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSections to fetch.
     */
    orderBy?: VideoSectionOrderByWithRelationInput | VideoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoSections
    **/
    _count?: true | VideoSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoSectionMaxAggregateInputType
  }

  export type GetVideoSectionAggregateType<T extends VideoSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoSection[P]>
      : GetScalarType<T[P], AggregateVideoSection[P]>
  }




  export type VideoSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoSectionWhereInput
    orderBy?: VideoSectionOrderByWithAggregationInput | VideoSectionOrderByWithAggregationInput[]
    by: VideoSectionScalarFieldEnum[] | VideoSectionScalarFieldEnum
    having?: VideoSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoSectionCountAggregateInputType | true
    _avg?: VideoSectionAvgAggregateInputType
    _sum?: VideoSectionSumAggregateInputType
    _min?: VideoSectionMinAggregateInputType
    _max?: VideoSectionMaxAggregateInputType
  }

  export type VideoSectionGroupByOutputType = {
    id: string
    video_title: string
    video_url: string
    video_public_id: string
    video_thumbnailUrl: string
    video_duration: number
    sectionId: string
    createdAt: Date
    updatedAt: Date
    _count: VideoSectionCountAggregateOutputType | null
    _avg: VideoSectionAvgAggregateOutputType | null
    _sum: VideoSectionSumAggregateOutputType | null
    _min: VideoSectionMinAggregateOutputType | null
    _max: VideoSectionMaxAggregateOutputType | null
  }

  type GetVideoSectionGroupByPayload<T extends VideoSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoSectionGroupByOutputType[P]>
            : GetScalarType<T[P], VideoSectionGroupByOutputType[P]>
        }
      >
    >


  export type VideoSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_title?: boolean
    video_url?: boolean
    video_public_id?: boolean
    video_thumbnailUrl?: boolean
    video_duration?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoSection"]>

  export type VideoSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_title?: boolean
    video_url?: boolean
    video_public_id?: boolean
    video_thumbnailUrl?: boolean
    video_duration?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoSection"]>

  export type VideoSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_title?: boolean
    video_url?: boolean
    video_public_id?: boolean
    video_thumbnailUrl?: boolean
    video_duration?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoSection"]>

  export type VideoSectionSelectScalar = {
    id?: boolean
    video_title?: boolean
    video_url?: boolean
    video_public_id?: boolean
    video_thumbnailUrl?: boolean
    video_duration?: boolean
    sectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "video_title" | "video_url" | "video_public_id" | "video_thumbnailUrl" | "video_duration" | "sectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["videoSection"]>
  export type VideoSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type VideoSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type VideoSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $VideoSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoSection"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      video_title: string
      video_url: string
      video_public_id: string
      video_thumbnailUrl: string
      video_duration: number
      sectionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videoSection"]>
    composites: {}
  }

  type VideoSectionGetPayload<S extends boolean | null | undefined | VideoSectionDefaultArgs> = $Result.GetResult<Prisma.$VideoSectionPayload, S>

  type VideoSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoSectionCountAggregateInputType | true
    }

  export interface VideoSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoSection'], meta: { name: 'VideoSection' } }
    /**
     * Find zero or one VideoSection that matches the filter.
     * @param {VideoSectionFindUniqueArgs} args - Arguments to find a VideoSection
     * @example
     * // Get one VideoSection
     * const videoSection = await prisma.videoSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoSectionFindUniqueArgs>(args: SelectSubset<T, VideoSectionFindUniqueArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoSectionFindUniqueOrThrowArgs} args - Arguments to find a VideoSection
     * @example
     * // Get one VideoSection
     * const videoSection = await prisma.videoSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSectionFindFirstArgs} args - Arguments to find a VideoSection
     * @example
     * // Get one VideoSection
     * const videoSection = await prisma.videoSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoSectionFindFirstArgs>(args?: SelectSubset<T, VideoSectionFindFirstArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSectionFindFirstOrThrowArgs} args - Arguments to find a VideoSection
     * @example
     * // Get one VideoSection
     * const videoSection = await prisma.videoSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoSections
     * const videoSections = await prisma.videoSection.findMany()
     * 
     * // Get first 10 VideoSections
     * const videoSections = await prisma.videoSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoSectionWithIdOnly = await prisma.videoSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoSectionFindManyArgs>(args?: SelectSubset<T, VideoSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoSection.
     * @param {VideoSectionCreateArgs} args - Arguments to create a VideoSection.
     * @example
     * // Create one VideoSection
     * const VideoSection = await prisma.videoSection.create({
     *   data: {
     *     // ... data to create a VideoSection
     *   }
     * })
     * 
     */
    create<T extends VideoSectionCreateArgs>(args: SelectSubset<T, VideoSectionCreateArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoSections.
     * @param {VideoSectionCreateManyArgs} args - Arguments to create many VideoSections.
     * @example
     * // Create many VideoSections
     * const videoSection = await prisma.videoSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoSectionCreateManyArgs>(args?: SelectSubset<T, VideoSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoSections and returns the data saved in the database.
     * @param {VideoSectionCreateManyAndReturnArgs} args - Arguments to create many VideoSections.
     * @example
     * // Create many VideoSections
     * const videoSection = await prisma.videoSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoSections and only return the `id`
     * const videoSectionWithIdOnly = await prisma.videoSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoSection.
     * @param {VideoSectionDeleteArgs} args - Arguments to delete one VideoSection.
     * @example
     * // Delete one VideoSection
     * const VideoSection = await prisma.videoSection.delete({
     *   where: {
     *     // ... filter to delete one VideoSection
     *   }
     * })
     * 
     */
    delete<T extends VideoSectionDeleteArgs>(args: SelectSubset<T, VideoSectionDeleteArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoSection.
     * @param {VideoSectionUpdateArgs} args - Arguments to update one VideoSection.
     * @example
     * // Update one VideoSection
     * const videoSection = await prisma.videoSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoSectionUpdateArgs>(args: SelectSubset<T, VideoSectionUpdateArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoSections.
     * @param {VideoSectionDeleteManyArgs} args - Arguments to filter VideoSections to delete.
     * @example
     * // Delete a few VideoSections
     * const { count } = await prisma.videoSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoSectionDeleteManyArgs>(args?: SelectSubset<T, VideoSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoSections
     * const videoSection = await prisma.videoSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoSectionUpdateManyArgs>(args: SelectSubset<T, VideoSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoSections and returns the data updated in the database.
     * @param {VideoSectionUpdateManyAndReturnArgs} args - Arguments to update many VideoSections.
     * @example
     * // Update many VideoSections
     * const videoSection = await prisma.videoSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoSections and only return the `id`
     * const videoSectionWithIdOnly = await prisma.videoSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoSection.
     * @param {VideoSectionUpsertArgs} args - Arguments to update or create a VideoSection.
     * @example
     * // Update or create a VideoSection
     * const videoSection = await prisma.videoSection.upsert({
     *   create: {
     *     // ... data to create a VideoSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoSection we want to update
     *   }
     * })
     */
    upsert<T extends VideoSectionUpsertArgs>(args: SelectSubset<T, VideoSectionUpsertArgs<ExtArgs>>): Prisma__VideoSectionClient<$Result.GetResult<Prisma.$VideoSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSectionCountArgs} args - Arguments to filter VideoSections to count.
     * @example
     * // Count the number of VideoSections
     * const count = await prisma.videoSection.count({
     *   where: {
     *     // ... the filter for the VideoSections we want to count
     *   }
     * })
    **/
    count<T extends VideoSectionCountArgs>(
      args?: Subset<T, VideoSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoSectionAggregateArgs>(args: Subset<T, VideoSectionAggregateArgs>): Prisma.PrismaPromise<GetVideoSectionAggregateType<T>>

    /**
     * Group by VideoSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSectionGroupByArgs} args - Group by arguments.
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
      T extends VideoSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoSectionGroupByArgs['orderBy'] }
        : { orderBy?: VideoSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoSection model
   */
  readonly fields: VideoSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoSection model
   */
  interface VideoSectionFieldRefs {
    readonly id: FieldRef<"VideoSection", 'String'>
    readonly video_title: FieldRef<"VideoSection", 'String'>
    readonly video_url: FieldRef<"VideoSection", 'String'>
    readonly video_public_id: FieldRef<"VideoSection", 'String'>
    readonly video_thumbnailUrl: FieldRef<"VideoSection", 'String'>
    readonly video_duration: FieldRef<"VideoSection", 'Float'>
    readonly sectionId: FieldRef<"VideoSection", 'String'>
    readonly createdAt: FieldRef<"VideoSection", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoSection findUnique
   */
  export type VideoSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * Filter, which VideoSection to fetch.
     */
    where: VideoSectionWhereUniqueInput
  }

  /**
   * VideoSection findUniqueOrThrow
   */
  export type VideoSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * Filter, which VideoSection to fetch.
     */
    where: VideoSectionWhereUniqueInput
  }

  /**
   * VideoSection findFirst
   */
  export type VideoSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * Filter, which VideoSection to fetch.
     */
    where?: VideoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSections to fetch.
     */
    orderBy?: VideoSectionOrderByWithRelationInput | VideoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoSections.
     */
    cursor?: VideoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoSections.
     */
    distinct?: VideoSectionScalarFieldEnum | VideoSectionScalarFieldEnum[]
  }

  /**
   * VideoSection findFirstOrThrow
   */
  export type VideoSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * Filter, which VideoSection to fetch.
     */
    where?: VideoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSections to fetch.
     */
    orderBy?: VideoSectionOrderByWithRelationInput | VideoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoSections.
     */
    cursor?: VideoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoSections.
     */
    distinct?: VideoSectionScalarFieldEnum | VideoSectionScalarFieldEnum[]
  }

  /**
   * VideoSection findMany
   */
  export type VideoSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * Filter, which VideoSections to fetch.
     */
    where?: VideoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSections to fetch.
     */
    orderBy?: VideoSectionOrderByWithRelationInput | VideoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoSections.
     */
    cursor?: VideoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSections.
     */
    skip?: number
    distinct?: VideoSectionScalarFieldEnum | VideoSectionScalarFieldEnum[]
  }

  /**
   * VideoSection create
   */
  export type VideoSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoSection.
     */
    data: XOR<VideoSectionCreateInput, VideoSectionUncheckedCreateInput>
  }

  /**
   * VideoSection createMany
   */
  export type VideoSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoSections.
     */
    data: VideoSectionCreateManyInput | VideoSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoSection createManyAndReturn
   */
  export type VideoSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * The data used to create many VideoSections.
     */
    data: VideoSectionCreateManyInput | VideoSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoSection update
   */
  export type VideoSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoSection.
     */
    data: XOR<VideoSectionUpdateInput, VideoSectionUncheckedUpdateInput>
    /**
     * Choose, which VideoSection to update.
     */
    where: VideoSectionWhereUniqueInput
  }

  /**
   * VideoSection updateMany
   */
  export type VideoSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoSections.
     */
    data: XOR<VideoSectionUpdateManyMutationInput, VideoSectionUncheckedUpdateManyInput>
    /**
     * Filter which VideoSections to update
     */
    where?: VideoSectionWhereInput
    /**
     * Limit how many VideoSections to update.
     */
    limit?: number
  }

  /**
   * VideoSection updateManyAndReturn
   */
  export type VideoSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * The data used to update VideoSections.
     */
    data: XOR<VideoSectionUpdateManyMutationInput, VideoSectionUncheckedUpdateManyInput>
    /**
     * Filter which VideoSections to update
     */
    where?: VideoSectionWhereInput
    /**
     * Limit how many VideoSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoSection upsert
   */
  export type VideoSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoSection to update in case it exists.
     */
    where: VideoSectionWhereUniqueInput
    /**
     * In case the VideoSection found by the `where` argument doesn't exist, create a new VideoSection with this data.
     */
    create: XOR<VideoSectionCreateInput, VideoSectionUncheckedCreateInput>
    /**
     * In case the VideoSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoSectionUpdateInput, VideoSectionUncheckedUpdateInput>
  }

  /**
   * VideoSection delete
   */
  export type VideoSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
    /**
     * Filter which VideoSection to delete.
     */
    where: VideoSectionWhereUniqueInput
  }

  /**
   * VideoSection deleteMany
   */
  export type VideoSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoSections to delete
     */
    where?: VideoSectionWhereInput
    /**
     * Limit how many VideoSections to delete.
     */
    limit?: number
  }

  /**
   * VideoSection without action
   */
  export type VideoSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSection
     */
    select?: VideoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSection
     */
    omit?: VideoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSectionInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    value: number | null
  }

  export type RatingSumAggregateOutputType = {
    value: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    value: number | null
    courseId: string | null
    userId: string | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    value: number | null
    courseId: string | null
    userId: string | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    value: number
    courseId: number
    userId: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    value?: true
  }

  export type RatingSumAggregateInputType = {
    value?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    value?: true
    courseId?: true
    userId?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    value?: true
    courseId?: true
    userId?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    value?: true
    courseId?: true
    userId?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    value: number
    courseId: string
    userId: string
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    value?: boolean
    courseId?: boolean
    userId?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "courseId" | "userId", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      courseId: string
      userId: string
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
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
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly value: FieldRef<"Rating", 'Int'>
    readonly courseId: FieldRef<"Rating", 'String'>
    readonly userId: FieldRef<"Rating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model EnrolledStudents
   */

  export type AggregateEnrolledStudents = {
    _count: EnrolledStudentsCountAggregateOutputType | null
    _avg: EnrolledStudentsAvgAggregateOutputType | null
    _sum: EnrolledStudentsSumAggregateOutputType | null
    _min: EnrolledStudentsMinAggregateOutputType | null
    _max: EnrolledStudentsMaxAggregateOutputType | null
  }

  export type EnrolledStudentsAvgAggregateOutputType = {
    amount: number | null
  }

  export type EnrolledStudentsSumAggregateOutputType = {
    amount: number | null
  }

  export type EnrolledStudentsMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    amount: number | null
    currency: string | null
    payment_status: $Enums.payment_status | null
    studentId: string | null
    email: string | null
    contact: string | null
    invoice_name: string | null
    created_at: string | null
    courseId: string | null
  }

  export type EnrolledStudentsMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    amount: number | null
    currency: string | null
    payment_status: $Enums.payment_status | null
    studentId: string | null
    email: string | null
    contact: string | null
    invoice_name: string | null
    created_at: string | null
    courseId: string | null
  }

  export type EnrolledStudentsCountAggregateOutputType = {
    id: number
    order_id: number
    amount: number
    currency: number
    payment_status: number
    studentId: number
    email: number
    contact: number
    invoice_name: number
    created_at: number
    courseId: number
    _all: number
  }


  export type EnrolledStudentsAvgAggregateInputType = {
    amount?: true
  }

  export type EnrolledStudentsSumAggregateInputType = {
    amount?: true
  }

  export type EnrolledStudentsMinAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    currency?: true
    payment_status?: true
    studentId?: true
    email?: true
    contact?: true
    invoice_name?: true
    created_at?: true
    courseId?: true
  }

  export type EnrolledStudentsMaxAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    currency?: true
    payment_status?: true
    studentId?: true
    email?: true
    contact?: true
    invoice_name?: true
    created_at?: true
    courseId?: true
  }

  export type EnrolledStudentsCountAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    currency?: true
    payment_status?: true
    studentId?: true
    email?: true
    contact?: true
    invoice_name?: true
    created_at?: true
    courseId?: true
    _all?: true
  }

  export type EnrolledStudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledStudents to aggregate.
     */
    where?: EnrolledStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentsOrderByWithRelationInput | EnrolledStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrolledStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnrolledStudents
    **/
    _count?: true | EnrolledStudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrolledStudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrolledStudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolledStudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolledStudentsMaxAggregateInputType
  }

  export type GetEnrolledStudentsAggregateType<T extends EnrolledStudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolledStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolledStudents[P]>
      : GetScalarType<T[P], AggregateEnrolledStudents[P]>
  }




  export type EnrolledStudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledStudentsWhereInput
    orderBy?: EnrolledStudentsOrderByWithAggregationInput | EnrolledStudentsOrderByWithAggregationInput[]
    by: EnrolledStudentsScalarFieldEnum[] | EnrolledStudentsScalarFieldEnum
    having?: EnrolledStudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolledStudentsCountAggregateInputType | true
    _avg?: EnrolledStudentsAvgAggregateInputType
    _sum?: EnrolledStudentsSumAggregateInputType
    _min?: EnrolledStudentsMinAggregateInputType
    _max?: EnrolledStudentsMaxAggregateInputType
  }

  export type EnrolledStudentsGroupByOutputType = {
    id: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    courseId: string
    _count: EnrolledStudentsCountAggregateOutputType | null
    _avg: EnrolledStudentsAvgAggregateOutputType | null
    _sum: EnrolledStudentsSumAggregateOutputType | null
    _min: EnrolledStudentsMinAggregateOutputType | null
    _max: EnrolledStudentsMaxAggregateOutputType | null
  }

  type GetEnrolledStudentsGroupByPayload<T extends EnrolledStudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrolledStudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolledStudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolledStudentsGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolledStudentsGroupByOutputType[P]>
        }
      >
    >


  export type EnrolledStudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    studentId?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    created_at?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseProgress?: boolean | EnrolledStudents$courseProgressArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledStudents"]>

  export type EnrolledStudentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    studentId?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    created_at?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledStudents"]>

  export type EnrolledStudentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    studentId?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    created_at?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledStudents"]>

  export type EnrolledStudentsSelectScalar = {
    id?: boolean
    order_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_status?: boolean
    studentId?: boolean
    email?: boolean
    contact?: boolean
    invoice_name?: boolean
    created_at?: boolean
    courseId?: boolean
  }

  export type EnrolledStudentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "amount" | "currency" | "payment_status" | "studentId" | "email" | "contact" | "invoice_name" | "created_at" | "courseId", ExtArgs["result"]["enrolledStudents"]>
  export type EnrolledStudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseProgress?: boolean | EnrolledStudents$courseProgressArgs<ExtArgs>
  }
  export type EnrolledStudentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrolledStudentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EnrolledStudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnrolledStudents"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      courseProgress: Prisma.$CourseProgressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      amount: number
      currency: string
      payment_status: $Enums.payment_status
      studentId: string
      email: string
      contact: string
      invoice_name: string
      created_at: string
      courseId: string
    }, ExtArgs["result"]["enrolledStudents"]>
    composites: {}
  }

  type EnrolledStudentsGetPayload<S extends boolean | null | undefined | EnrolledStudentsDefaultArgs> = $Result.GetResult<Prisma.$EnrolledStudentsPayload, S>

  type EnrolledStudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrolledStudentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrolledStudentsCountAggregateInputType | true
    }

  export interface EnrolledStudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnrolledStudents'], meta: { name: 'EnrolledStudents' } }
    /**
     * Find zero or one EnrolledStudents that matches the filter.
     * @param {EnrolledStudentsFindUniqueArgs} args - Arguments to find a EnrolledStudents
     * @example
     * // Get one EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrolledStudentsFindUniqueArgs>(args: SelectSubset<T, EnrolledStudentsFindUniqueArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnrolledStudents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrolledStudentsFindUniqueOrThrowArgs} args - Arguments to find a EnrolledStudents
     * @example
     * // Get one EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrolledStudentsFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrolledStudentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentsFindFirstArgs} args - Arguments to find a EnrolledStudents
     * @example
     * // Get one EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrolledStudentsFindFirstArgs>(args?: SelectSubset<T, EnrolledStudentsFindFirstArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledStudents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentsFindFirstOrThrowArgs} args - Arguments to find a EnrolledStudents
     * @example
     * // Get one EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrolledStudentsFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrolledStudentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnrolledStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.findMany()
     * 
     * // Get first 10 EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrolledStudentsWithIdOnly = await prisma.enrolledStudents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrolledStudentsFindManyArgs>(args?: SelectSubset<T, EnrolledStudentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnrolledStudents.
     * @param {EnrolledStudentsCreateArgs} args - Arguments to create a EnrolledStudents.
     * @example
     * // Create one EnrolledStudents
     * const EnrolledStudents = await prisma.enrolledStudents.create({
     *   data: {
     *     // ... data to create a EnrolledStudents
     *   }
     * })
     * 
     */
    create<T extends EnrolledStudentsCreateArgs>(args: SelectSubset<T, EnrolledStudentsCreateArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnrolledStudents.
     * @param {EnrolledStudentsCreateManyArgs} args - Arguments to create many EnrolledStudents.
     * @example
     * // Create many EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrolledStudentsCreateManyArgs>(args?: SelectSubset<T, EnrolledStudentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnrolledStudents and returns the data saved in the database.
     * @param {EnrolledStudentsCreateManyAndReturnArgs} args - Arguments to create many EnrolledStudents.
     * @example
     * // Create many EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnrolledStudents and only return the `id`
     * const enrolledStudentsWithIdOnly = await prisma.enrolledStudents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrolledStudentsCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrolledStudentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnrolledStudents.
     * @param {EnrolledStudentsDeleteArgs} args - Arguments to delete one EnrolledStudents.
     * @example
     * // Delete one EnrolledStudents
     * const EnrolledStudents = await prisma.enrolledStudents.delete({
     *   where: {
     *     // ... filter to delete one EnrolledStudents
     *   }
     * })
     * 
     */
    delete<T extends EnrolledStudentsDeleteArgs>(args: SelectSubset<T, EnrolledStudentsDeleteArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnrolledStudents.
     * @param {EnrolledStudentsUpdateArgs} args - Arguments to update one EnrolledStudents.
     * @example
     * // Update one EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrolledStudentsUpdateArgs>(args: SelectSubset<T, EnrolledStudentsUpdateArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnrolledStudents.
     * @param {EnrolledStudentsDeleteManyArgs} args - Arguments to filter EnrolledStudents to delete.
     * @example
     * // Delete a few EnrolledStudents
     * const { count } = await prisma.enrolledStudents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrolledStudentsDeleteManyArgs>(args?: SelectSubset<T, EnrolledStudentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrolledStudentsUpdateManyArgs>(args: SelectSubset<T, EnrolledStudentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledStudents and returns the data updated in the database.
     * @param {EnrolledStudentsUpdateManyAndReturnArgs} args - Arguments to update many EnrolledStudents.
     * @example
     * // Update many EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnrolledStudents and only return the `id`
     * const enrolledStudentsWithIdOnly = await prisma.enrolledStudents.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrolledStudentsUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrolledStudentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnrolledStudents.
     * @param {EnrolledStudentsUpsertArgs} args - Arguments to update or create a EnrolledStudents.
     * @example
     * // Update or create a EnrolledStudents
     * const enrolledStudents = await prisma.enrolledStudents.upsert({
     *   create: {
     *     // ... data to create a EnrolledStudents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrolledStudents we want to update
     *   }
     * })
     */
    upsert<T extends EnrolledStudentsUpsertArgs>(args: SelectSubset<T, EnrolledStudentsUpsertArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnrolledStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentsCountArgs} args - Arguments to filter EnrolledStudents to count.
     * @example
     * // Count the number of EnrolledStudents
     * const count = await prisma.enrolledStudents.count({
     *   where: {
     *     // ... the filter for the EnrolledStudents we want to count
     *   }
     * })
    **/
    count<T extends EnrolledStudentsCountArgs>(
      args?: Subset<T, EnrolledStudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolledStudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrolledStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrolledStudentsAggregateArgs>(args: Subset<T, EnrolledStudentsAggregateArgs>): Prisma.PrismaPromise<GetEnrolledStudentsAggregateType<T>>

    /**
     * Group by EnrolledStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledStudentsGroupByArgs} args - Group by arguments.
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
      T extends EnrolledStudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolledStudentsGroupByArgs['orderBy'] }
        : { orderBy?: EnrolledStudentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrolledStudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolledStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnrolledStudents model
   */
  readonly fields: EnrolledStudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnrolledStudents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrolledStudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseProgress<T extends EnrolledStudents$courseProgressArgs<ExtArgs> = {}>(args?: Subset<T, EnrolledStudents$courseProgressArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnrolledStudents model
   */
  interface EnrolledStudentsFieldRefs {
    readonly id: FieldRef<"EnrolledStudents", 'String'>
    readonly order_id: FieldRef<"EnrolledStudents", 'String'>
    readonly amount: FieldRef<"EnrolledStudents", 'Int'>
    readonly currency: FieldRef<"EnrolledStudents", 'String'>
    readonly payment_status: FieldRef<"EnrolledStudents", 'payment_status'>
    readonly studentId: FieldRef<"EnrolledStudents", 'String'>
    readonly email: FieldRef<"EnrolledStudents", 'String'>
    readonly contact: FieldRef<"EnrolledStudents", 'String'>
    readonly invoice_name: FieldRef<"EnrolledStudents", 'String'>
    readonly created_at: FieldRef<"EnrolledStudents", 'String'>
    readonly courseId: FieldRef<"EnrolledStudents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnrolledStudents findUnique
   */
  export type EnrolledStudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudents to fetch.
     */
    where: EnrolledStudentsWhereUniqueInput
  }

  /**
   * EnrolledStudents findUniqueOrThrow
   */
  export type EnrolledStudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudents to fetch.
     */
    where: EnrolledStudentsWhereUniqueInput
  }

  /**
   * EnrolledStudents findFirst
   */
  export type EnrolledStudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudents to fetch.
     */
    where?: EnrolledStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentsOrderByWithRelationInput | EnrolledStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledStudents.
     */
    cursor?: EnrolledStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledStudents.
     */
    distinct?: EnrolledStudentsScalarFieldEnum | EnrolledStudentsScalarFieldEnum[]
  }

  /**
   * EnrolledStudents findFirstOrThrow
   */
  export type EnrolledStudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudents to fetch.
     */
    where?: EnrolledStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentsOrderByWithRelationInput | EnrolledStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledStudents.
     */
    cursor?: EnrolledStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledStudents.
     */
    distinct?: EnrolledStudentsScalarFieldEnum | EnrolledStudentsScalarFieldEnum[]
  }

  /**
   * EnrolledStudents findMany
   */
  export type EnrolledStudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledStudents to fetch.
     */
    where?: EnrolledStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledStudents to fetch.
     */
    orderBy?: EnrolledStudentsOrderByWithRelationInput | EnrolledStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnrolledStudents.
     */
    cursor?: EnrolledStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledStudents.
     */
    skip?: number
    distinct?: EnrolledStudentsScalarFieldEnum | EnrolledStudentsScalarFieldEnum[]
  }

  /**
   * EnrolledStudents create
   */
  export type EnrolledStudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a EnrolledStudents.
     */
    data: XOR<EnrolledStudentsCreateInput, EnrolledStudentsUncheckedCreateInput>
  }

  /**
   * EnrolledStudents createMany
   */
  export type EnrolledStudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnrolledStudents.
     */
    data: EnrolledStudentsCreateManyInput | EnrolledStudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnrolledStudents createManyAndReturn
   */
  export type EnrolledStudentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * The data used to create many EnrolledStudents.
     */
    data: EnrolledStudentsCreateManyInput | EnrolledStudentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrolledStudents update
   */
  export type EnrolledStudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a EnrolledStudents.
     */
    data: XOR<EnrolledStudentsUpdateInput, EnrolledStudentsUncheckedUpdateInput>
    /**
     * Choose, which EnrolledStudents to update.
     */
    where: EnrolledStudentsWhereUniqueInput
  }

  /**
   * EnrolledStudents updateMany
   */
  export type EnrolledStudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnrolledStudents.
     */
    data: XOR<EnrolledStudentsUpdateManyMutationInput, EnrolledStudentsUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledStudents to update
     */
    where?: EnrolledStudentsWhereInput
    /**
     * Limit how many EnrolledStudents to update.
     */
    limit?: number
  }

  /**
   * EnrolledStudents updateManyAndReturn
   */
  export type EnrolledStudentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * The data used to update EnrolledStudents.
     */
    data: XOR<EnrolledStudentsUpdateManyMutationInput, EnrolledStudentsUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledStudents to update
     */
    where?: EnrolledStudentsWhereInput
    /**
     * Limit how many EnrolledStudents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrolledStudents upsert
   */
  export type EnrolledStudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the EnrolledStudents to update in case it exists.
     */
    where: EnrolledStudentsWhereUniqueInput
    /**
     * In case the EnrolledStudents found by the `where` argument doesn't exist, create a new EnrolledStudents with this data.
     */
    create: XOR<EnrolledStudentsCreateInput, EnrolledStudentsUncheckedCreateInput>
    /**
     * In case the EnrolledStudents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolledStudentsUpdateInput, EnrolledStudentsUncheckedUpdateInput>
  }

  /**
   * EnrolledStudents delete
   */
  export type EnrolledStudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
    /**
     * Filter which EnrolledStudents to delete.
     */
    where: EnrolledStudentsWhereUniqueInput
  }

  /**
   * EnrolledStudents deleteMany
   */
  export type EnrolledStudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledStudents to delete
     */
    where?: EnrolledStudentsWhereInput
    /**
     * Limit how many EnrolledStudents to delete.
     */
    limit?: number
  }

  /**
   * EnrolledStudents.courseProgress
   */
  export type EnrolledStudents$courseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    where?: CourseProgressWhereInput
  }

  /**
   * EnrolledStudents without action
   */
  export type EnrolledStudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledStudents
     */
    select?: EnrolledStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledStudents
     */
    omit?: EnrolledStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledStudentsInclude<ExtArgs> | null
  }


  /**
   * Model CourseProgress
   */

  export type AggregateCourseProgress = {
    _count: CourseProgressCountAggregateOutputType | null
    _avg: CourseProgressAvgAggregateOutputType | null
    _sum: CourseProgressSumAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  export type CourseProgressAvgAggregateOutputType = {
    completionPercentage: number | null
  }

  export type CourseProgressSumAggregateOutputType = {
    completionPercentage: number | null
  }

  export type CourseProgressMinAggregateOutputType = {
    id: string | null
    enrolledStudentId: string | null
    courseId: string | null
    studentId: string | null
    completionPercentage: number | null
    isCompleted: boolean | null
  }

  export type CourseProgressMaxAggregateOutputType = {
    id: string | null
    enrolledStudentId: string | null
    courseId: string | null
    studentId: string | null
    completionPercentage: number | null
    isCompleted: boolean | null
  }

  export type CourseProgressCountAggregateOutputType = {
    id: number
    enrolledStudentId: number
    courseId: number
    studentId: number
    completionPercentage: number
    isCompleted: number
    _all: number
  }


  export type CourseProgressAvgAggregateInputType = {
    completionPercentage?: true
  }

  export type CourseProgressSumAggregateInputType = {
    completionPercentage?: true
  }

  export type CourseProgressMinAggregateInputType = {
    id?: true
    enrolledStudentId?: true
    courseId?: true
    studentId?: true
    completionPercentage?: true
    isCompleted?: true
  }

  export type CourseProgressMaxAggregateInputType = {
    id?: true
    enrolledStudentId?: true
    courseId?: true
    studentId?: true
    completionPercentage?: true
    isCompleted?: true
  }

  export type CourseProgressCountAggregateInputType = {
    id?: true
    enrolledStudentId?: true
    courseId?: true
    studentId?: true
    completionPercentage?: true
    isCompleted?: true
    _all?: true
  }

  export type CourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgress to aggregate.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseProgresses
    **/
    _count?: true | CourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseProgressMaxAggregateInputType
  }

  export type GetCourseProgressAggregateType<T extends CourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseProgress[P]>
      : GetScalarType<T[P], AggregateCourseProgress[P]>
  }




  export type CourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithAggregationInput | CourseProgressOrderByWithAggregationInput[]
    by: CourseProgressScalarFieldEnum[] | CourseProgressScalarFieldEnum
    having?: CourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseProgressCountAggregateInputType | true
    _avg?: CourseProgressAvgAggregateInputType
    _sum?: CourseProgressSumAggregateInputType
    _min?: CourseProgressMinAggregateInputType
    _max?: CourseProgressMaxAggregateInputType
  }

  export type CourseProgressGroupByOutputType = {
    id: string
    enrolledStudentId: string
    courseId: string
    studentId: string
    completionPercentage: number
    isCompleted: boolean
    _count: CourseProgressCountAggregateOutputType | null
    _avg: CourseProgressAvgAggregateOutputType | null
    _sum: CourseProgressSumAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  type GetCourseProgressGroupByPayload<T extends CourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type CourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledStudentId?: boolean
    courseId?: boolean
    studentId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    enrolledStudent?: boolean | EnrolledStudentsDefaultArgs<ExtArgs>
    sectionProgress?: boolean | CourseProgress$sectionProgressArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledStudentId?: boolean
    courseId?: boolean
    studentId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    enrolledStudent?: boolean | EnrolledStudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledStudentId?: boolean
    courseId?: boolean
    studentId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    enrolledStudent?: boolean | EnrolledStudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectScalar = {
    id?: boolean
    enrolledStudentId?: boolean
    courseId?: boolean
    studentId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
  }

  export type CourseProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrolledStudentId" | "courseId" | "studentId" | "completionPercentage" | "isCompleted", ExtArgs["result"]["courseProgress"]>
  export type CourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledStudent?: boolean | EnrolledStudentsDefaultArgs<ExtArgs>
    sectionProgress?: boolean | CourseProgress$sectionProgressArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledStudent?: boolean | EnrolledStudentsDefaultArgs<ExtArgs>
  }
  export type CourseProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledStudent?: boolean | EnrolledStudentsDefaultArgs<ExtArgs>
  }

  export type $CourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseProgress"
    objects: {
      enrolledStudent: Prisma.$EnrolledStudentsPayload<ExtArgs>
      sectionProgress: Prisma.$SectionProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enrolledStudentId: string
      courseId: string
      studentId: string
      completionPercentage: number
      isCompleted: boolean
    }, ExtArgs["result"]["courseProgress"]>
    composites: {}
  }

  type CourseProgressGetPayload<S extends boolean | null | undefined | CourseProgressDefaultArgs> = $Result.GetResult<Prisma.$CourseProgressPayload, S>

  type CourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseProgressCountAggregateInputType | true
    }

  export interface CourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseProgress'], meta: { name: 'CourseProgress' } }
    /**
     * Find zero or one CourseProgress that matches the filter.
     * @param {CourseProgressFindUniqueArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseProgressFindUniqueArgs>(args: SelectSubset<T, CourseProgressFindUniqueArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseProgressFindUniqueOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseProgressFindFirstArgs>(args?: SelectSubset<T, CourseProgressFindFirstArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany()
     * 
     * // Get first 10 CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseProgressFindManyArgs>(args?: SelectSubset<T, CourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseProgress.
     * @param {CourseProgressCreateArgs} args - Arguments to create a CourseProgress.
     * @example
     * // Create one CourseProgress
     * const CourseProgress = await prisma.courseProgress.create({
     *   data: {
     *     // ... data to create a CourseProgress
     *   }
     * })
     * 
     */
    create<T extends CourseProgressCreateArgs>(args: SelectSubset<T, CourseProgressCreateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseProgresses.
     * @param {CourseProgressCreateManyArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseProgressCreateManyArgs>(args?: SelectSubset<T, CourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseProgresses and returns the data saved in the database.
     * @param {CourseProgressCreateManyAndReturnArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseProgresses and only return the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseProgress.
     * @param {CourseProgressDeleteArgs} args - Arguments to delete one CourseProgress.
     * @example
     * // Delete one CourseProgress
     * const CourseProgress = await prisma.courseProgress.delete({
     *   where: {
     *     // ... filter to delete one CourseProgress
     *   }
     * })
     * 
     */
    delete<T extends CourseProgressDeleteArgs>(args: SelectSubset<T, CourseProgressDeleteArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseProgress.
     * @param {CourseProgressUpdateArgs} args - Arguments to update one CourseProgress.
     * @example
     * // Update one CourseProgress
     * const courseProgress = await prisma.courseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseProgressUpdateArgs>(args: SelectSubset<T, CourseProgressUpdateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseProgresses.
     * @param {CourseProgressDeleteManyArgs} args - Arguments to filter CourseProgresses to delete.
     * @example
     * // Delete a few CourseProgresses
     * const { count } = await prisma.courseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseProgressDeleteManyArgs>(args?: SelectSubset<T, CourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseProgresses
     * const courseProgress = await prisma.courseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseProgressUpdateManyArgs>(args: SelectSubset<T, CourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProgresses and returns the data updated in the database.
     * @param {CourseProgressUpdateManyAndReturnArgs} args - Arguments to update many CourseProgresses.
     * @example
     * // Update many CourseProgresses
     * const courseProgress = await prisma.courseProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseProgresses and only return the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseProgress.
     * @param {CourseProgressUpsertArgs} args - Arguments to update or create a CourseProgress.
     * @example
     * // Update or create a CourseProgress
     * const courseProgress = await prisma.courseProgress.upsert({
     *   create: {
     *     // ... data to create a CourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends CourseProgressUpsertArgs>(args: SelectSubset<T, CourseProgressUpsertArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressCountArgs} args - Arguments to filter CourseProgresses to count.
     * @example
     * // Count the number of CourseProgresses
     * const count = await prisma.courseProgress.count({
     *   where: {
     *     // ... the filter for the CourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends CourseProgressCountArgs>(
      args?: Subset<T, CourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseProgressAggregateArgs>(args: Subset<T, CourseProgressAggregateArgs>): Prisma.PrismaPromise<GetCourseProgressAggregateType<T>>

    /**
     * Group by CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressGroupByArgs} args - Group by arguments.
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
      T extends CourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: CourseProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseProgress model
   */
  readonly fields: CourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrolledStudent<T extends EnrolledStudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrolledStudentsDefaultArgs<ExtArgs>>): Prisma__EnrolledStudentsClient<$Result.GetResult<Prisma.$EnrolledStudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sectionProgress<T extends CourseProgress$sectionProgressArgs<ExtArgs> = {}>(args?: Subset<T, CourseProgress$sectionProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CourseProgress model
   */
  interface CourseProgressFieldRefs {
    readonly id: FieldRef<"CourseProgress", 'String'>
    readonly enrolledStudentId: FieldRef<"CourseProgress", 'String'>
    readonly courseId: FieldRef<"CourseProgress", 'String'>
    readonly studentId: FieldRef<"CourseProgress", 'String'>
    readonly completionPercentage: FieldRef<"CourseProgress", 'Float'>
    readonly isCompleted: FieldRef<"CourseProgress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CourseProgress findUnique
   */
  export type CourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findUniqueOrThrow
   */
  export type CourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findFirst
   */
  export type CourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findFirstOrThrow
   */
  export type CourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findMany
   */
  export type CourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgresses to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress create
   */
  export type CourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseProgress.
     */
    data: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
  }

  /**
   * CourseProgress createMany
   */
  export type CourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseProgress createManyAndReturn
   */
  export type CourseProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProgress update
   */
  export type CourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseProgress.
     */
    data: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
    /**
     * Choose, which CourseProgress to update.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress updateMany
   */
  export type CourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseProgresses.
     */
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which CourseProgresses to update
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to update.
     */
    limit?: number
  }

  /**
   * CourseProgress updateManyAndReturn
   */
  export type CourseProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * The data used to update CourseProgresses.
     */
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which CourseProgresses to update
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProgress upsert
   */
  export type CourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseProgress to update in case it exists.
     */
    where: CourseProgressWhereUniqueInput
    /**
     * In case the CourseProgress found by the `where` argument doesn't exist, create a new CourseProgress with this data.
     */
    create: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
    /**
     * In case the CourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
  }

  /**
   * CourseProgress delete
   */
  export type CourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter which CourseProgress to delete.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress deleteMany
   */
  export type CourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgresses to delete
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to delete.
     */
    limit?: number
  }

  /**
   * CourseProgress.sectionProgress
   */
  export type CourseProgress$sectionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    where?: SectionProgressWhereInput
    orderBy?: SectionProgressOrderByWithRelationInput | SectionProgressOrderByWithRelationInput[]
    cursor?: SectionProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionProgressScalarFieldEnum | SectionProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress without action
   */
  export type CourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
  }


  /**
   * Model SectionProgress
   */

  export type AggregateSectionProgress = {
    _count: SectionProgressCountAggregateOutputType | null
    _avg: SectionProgressAvgAggregateOutputType | null
    _sum: SectionProgressSumAggregateOutputType | null
    _min: SectionProgressMinAggregateOutputType | null
    _max: SectionProgressMaxAggregateOutputType | null
  }

  export type SectionProgressAvgAggregateOutputType = {
    completionPercentage: number | null
  }

  export type SectionProgressSumAggregateOutputType = {
    completionPercentage: number | null
  }

  export type SectionProgressMinAggregateOutputType = {
    id: string | null
    courseProgressId: string | null
    sectionId: string | null
    completionPercentage: number | null
    isCompleted: boolean | null
  }

  export type SectionProgressMaxAggregateOutputType = {
    id: string | null
    courseProgressId: string | null
    sectionId: string | null
    completionPercentage: number | null
    isCompleted: boolean | null
  }

  export type SectionProgressCountAggregateOutputType = {
    id: number
    courseProgressId: number
    sectionId: number
    completionPercentage: number
    isCompleted: number
    _all: number
  }


  export type SectionProgressAvgAggregateInputType = {
    completionPercentage?: true
  }

  export type SectionProgressSumAggregateInputType = {
    completionPercentage?: true
  }

  export type SectionProgressMinAggregateInputType = {
    id?: true
    courseProgressId?: true
    sectionId?: true
    completionPercentage?: true
    isCompleted?: true
  }

  export type SectionProgressMaxAggregateInputType = {
    id?: true
    courseProgressId?: true
    sectionId?: true
    completionPercentage?: true
    isCompleted?: true
  }

  export type SectionProgressCountAggregateInputType = {
    id?: true
    courseProgressId?: true
    sectionId?: true
    completionPercentage?: true
    isCompleted?: true
    _all?: true
  }

  export type SectionProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionProgress to aggregate.
     */
    where?: SectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionProgresses to fetch.
     */
    orderBy?: SectionProgressOrderByWithRelationInput | SectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionProgresses
    **/
    _count?: true | SectionProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionProgressMaxAggregateInputType
  }

  export type GetSectionProgressAggregateType<T extends SectionProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionProgress[P]>
      : GetScalarType<T[P], AggregateSectionProgress[P]>
  }




  export type SectionProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionProgressWhereInput
    orderBy?: SectionProgressOrderByWithAggregationInput | SectionProgressOrderByWithAggregationInput[]
    by: SectionProgressScalarFieldEnum[] | SectionProgressScalarFieldEnum
    having?: SectionProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionProgressCountAggregateInputType | true
    _avg?: SectionProgressAvgAggregateInputType
    _sum?: SectionProgressSumAggregateInputType
    _min?: SectionProgressMinAggregateInputType
    _max?: SectionProgressMaxAggregateInputType
  }

  export type SectionProgressGroupByOutputType = {
    id: string
    courseProgressId: string
    sectionId: string
    completionPercentage: number
    isCompleted: boolean
    _count: SectionProgressCountAggregateOutputType | null
    _avg: SectionProgressAvgAggregateOutputType | null
    _sum: SectionProgressSumAggregateOutputType | null
    _min: SectionProgressMinAggregateOutputType | null
    _max: SectionProgressMaxAggregateOutputType | null
  }

  type GetSectionProgressGroupByPayload<T extends SectionProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionProgressGroupByOutputType[P]>
            : GetScalarType<T[P], SectionProgressGroupByOutputType[P]>
        }
      >
    >


  export type SectionProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseProgressId?: boolean
    sectionId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    courseProgress?: boolean | CourseProgressDefaultArgs<ExtArgs>
    videoProgress?: boolean | SectionProgress$videoProgressArgs<ExtArgs>
    _count?: boolean | SectionProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionProgress"]>

  export type SectionProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseProgressId?: boolean
    sectionId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    courseProgress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionProgress"]>

  export type SectionProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseProgressId?: boolean
    sectionId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    courseProgress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionProgress"]>

  export type SectionProgressSelectScalar = {
    id?: boolean
    courseProgressId?: boolean
    sectionId?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
  }

  export type SectionProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseProgressId" | "sectionId" | "completionPercentage" | "isCompleted", ExtArgs["result"]["sectionProgress"]>
  export type SectionProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseProgress?: boolean | CourseProgressDefaultArgs<ExtArgs>
    videoProgress?: boolean | SectionProgress$videoProgressArgs<ExtArgs>
    _count?: boolean | SectionProgressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseProgress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }
  export type SectionProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseProgress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }

  export type $SectionProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionProgress"
    objects: {
      courseProgress: Prisma.$CourseProgressPayload<ExtArgs>
      videoProgress: Prisma.$VideoProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseProgressId: string
      sectionId: string
      completionPercentage: number
      isCompleted: boolean
    }, ExtArgs["result"]["sectionProgress"]>
    composites: {}
  }

  type SectionProgressGetPayload<S extends boolean | null | undefined | SectionProgressDefaultArgs> = $Result.GetResult<Prisma.$SectionProgressPayload, S>

  type SectionProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionProgressCountAggregateInputType | true
    }

  export interface SectionProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionProgress'], meta: { name: 'SectionProgress' } }
    /**
     * Find zero or one SectionProgress that matches the filter.
     * @param {SectionProgressFindUniqueArgs} args - Arguments to find a SectionProgress
     * @example
     * // Get one SectionProgress
     * const sectionProgress = await prisma.sectionProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionProgressFindUniqueArgs>(args: SelectSubset<T, SectionProgressFindUniqueArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectionProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionProgressFindUniqueOrThrowArgs} args - Arguments to find a SectionProgress
     * @example
     * // Get one SectionProgress
     * const sectionProgress = await prisma.sectionProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionProgressFindFirstArgs} args - Arguments to find a SectionProgress
     * @example
     * // Get one SectionProgress
     * const sectionProgress = await prisma.sectionProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionProgressFindFirstArgs>(args?: SelectSubset<T, SectionProgressFindFirstArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionProgressFindFirstOrThrowArgs} args - Arguments to find a SectionProgress
     * @example
     * // Get one SectionProgress
     * const sectionProgress = await prisma.sectionProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectionProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionProgresses
     * const sectionProgresses = await prisma.sectionProgress.findMany()
     * 
     * // Get first 10 SectionProgresses
     * const sectionProgresses = await prisma.sectionProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionProgressWithIdOnly = await prisma.sectionProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionProgressFindManyArgs>(args?: SelectSubset<T, SectionProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectionProgress.
     * @param {SectionProgressCreateArgs} args - Arguments to create a SectionProgress.
     * @example
     * // Create one SectionProgress
     * const SectionProgress = await prisma.sectionProgress.create({
     *   data: {
     *     // ... data to create a SectionProgress
     *   }
     * })
     * 
     */
    create<T extends SectionProgressCreateArgs>(args: SelectSubset<T, SectionProgressCreateArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectionProgresses.
     * @param {SectionProgressCreateManyArgs} args - Arguments to create many SectionProgresses.
     * @example
     * // Create many SectionProgresses
     * const sectionProgress = await prisma.sectionProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionProgressCreateManyArgs>(args?: SelectSubset<T, SectionProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionProgresses and returns the data saved in the database.
     * @param {SectionProgressCreateManyAndReturnArgs} args - Arguments to create many SectionProgresses.
     * @example
     * // Create many SectionProgresses
     * const sectionProgress = await prisma.sectionProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionProgresses and only return the `id`
     * const sectionProgressWithIdOnly = await prisma.sectionProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectionProgress.
     * @param {SectionProgressDeleteArgs} args - Arguments to delete one SectionProgress.
     * @example
     * // Delete one SectionProgress
     * const SectionProgress = await prisma.sectionProgress.delete({
     *   where: {
     *     // ... filter to delete one SectionProgress
     *   }
     * })
     * 
     */
    delete<T extends SectionProgressDeleteArgs>(args: SelectSubset<T, SectionProgressDeleteArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectionProgress.
     * @param {SectionProgressUpdateArgs} args - Arguments to update one SectionProgress.
     * @example
     * // Update one SectionProgress
     * const sectionProgress = await prisma.sectionProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionProgressUpdateArgs>(args: SelectSubset<T, SectionProgressUpdateArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectionProgresses.
     * @param {SectionProgressDeleteManyArgs} args - Arguments to filter SectionProgresses to delete.
     * @example
     * // Delete a few SectionProgresses
     * const { count } = await prisma.sectionProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionProgressDeleteManyArgs>(args?: SelectSubset<T, SectionProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionProgresses
     * const sectionProgress = await prisma.sectionProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionProgressUpdateManyArgs>(args: SelectSubset<T, SectionProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionProgresses and returns the data updated in the database.
     * @param {SectionProgressUpdateManyAndReturnArgs} args - Arguments to update many SectionProgresses.
     * @example
     * // Update many SectionProgresses
     * const sectionProgress = await prisma.sectionProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectionProgresses and only return the `id`
     * const sectionProgressWithIdOnly = await prisma.sectionProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectionProgress.
     * @param {SectionProgressUpsertArgs} args - Arguments to update or create a SectionProgress.
     * @example
     * // Update or create a SectionProgress
     * const sectionProgress = await prisma.sectionProgress.upsert({
     *   create: {
     *     // ... data to create a SectionProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionProgress we want to update
     *   }
     * })
     */
    upsert<T extends SectionProgressUpsertArgs>(args: SelectSubset<T, SectionProgressUpsertArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionProgressCountArgs} args - Arguments to filter SectionProgresses to count.
     * @example
     * // Count the number of SectionProgresses
     * const count = await prisma.sectionProgress.count({
     *   where: {
     *     // ... the filter for the SectionProgresses we want to count
     *   }
     * })
    **/
    count<T extends SectionProgressCountArgs>(
      args?: Subset<T, SectionProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionProgressAggregateArgs>(args: Subset<T, SectionProgressAggregateArgs>): Prisma.PrismaPromise<GetSectionProgressAggregateType<T>>

    /**
     * Group by SectionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionProgressGroupByArgs} args - Group by arguments.
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
      T extends SectionProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionProgressGroupByArgs['orderBy'] }
        : { orderBy?: SectionProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionProgress model
   */
  readonly fields: SectionProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseProgress<T extends CourseProgressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseProgressDefaultArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videoProgress<T extends SectionProgress$videoProgressArgs<ExtArgs> = {}>(args?: Subset<T, SectionProgress$videoProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SectionProgress model
   */
  interface SectionProgressFieldRefs {
    readonly id: FieldRef<"SectionProgress", 'String'>
    readonly courseProgressId: FieldRef<"SectionProgress", 'String'>
    readonly sectionId: FieldRef<"SectionProgress", 'String'>
    readonly completionPercentage: FieldRef<"SectionProgress", 'Float'>
    readonly isCompleted: FieldRef<"SectionProgress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SectionProgress findUnique
   */
  export type SectionProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which SectionProgress to fetch.
     */
    where: SectionProgressWhereUniqueInput
  }

  /**
   * SectionProgress findUniqueOrThrow
   */
  export type SectionProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which SectionProgress to fetch.
     */
    where: SectionProgressWhereUniqueInput
  }

  /**
   * SectionProgress findFirst
   */
  export type SectionProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which SectionProgress to fetch.
     */
    where?: SectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionProgresses to fetch.
     */
    orderBy?: SectionProgressOrderByWithRelationInput | SectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionProgresses.
     */
    cursor?: SectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionProgresses.
     */
    distinct?: SectionProgressScalarFieldEnum | SectionProgressScalarFieldEnum[]
  }

  /**
   * SectionProgress findFirstOrThrow
   */
  export type SectionProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which SectionProgress to fetch.
     */
    where?: SectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionProgresses to fetch.
     */
    orderBy?: SectionProgressOrderByWithRelationInput | SectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionProgresses.
     */
    cursor?: SectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionProgresses.
     */
    distinct?: SectionProgressScalarFieldEnum | SectionProgressScalarFieldEnum[]
  }

  /**
   * SectionProgress findMany
   */
  export type SectionProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which SectionProgresses to fetch.
     */
    where?: SectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionProgresses to fetch.
     */
    orderBy?: SectionProgressOrderByWithRelationInput | SectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionProgresses.
     */
    cursor?: SectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionProgresses.
     */
    skip?: number
    distinct?: SectionProgressScalarFieldEnum | SectionProgressScalarFieldEnum[]
  }

  /**
   * SectionProgress create
   */
  export type SectionProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionProgress.
     */
    data: XOR<SectionProgressCreateInput, SectionProgressUncheckedCreateInput>
  }

  /**
   * SectionProgress createMany
   */
  export type SectionProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionProgresses.
     */
    data: SectionProgressCreateManyInput | SectionProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionProgress createManyAndReturn
   */
  export type SectionProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * The data used to create many SectionProgresses.
     */
    data: SectionProgressCreateManyInput | SectionProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionProgress update
   */
  export type SectionProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionProgress.
     */
    data: XOR<SectionProgressUpdateInput, SectionProgressUncheckedUpdateInput>
    /**
     * Choose, which SectionProgress to update.
     */
    where: SectionProgressWhereUniqueInput
  }

  /**
   * SectionProgress updateMany
   */
  export type SectionProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionProgresses.
     */
    data: XOR<SectionProgressUpdateManyMutationInput, SectionProgressUncheckedUpdateManyInput>
    /**
     * Filter which SectionProgresses to update
     */
    where?: SectionProgressWhereInput
    /**
     * Limit how many SectionProgresses to update.
     */
    limit?: number
  }

  /**
   * SectionProgress updateManyAndReturn
   */
  export type SectionProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * The data used to update SectionProgresses.
     */
    data: XOR<SectionProgressUpdateManyMutationInput, SectionProgressUncheckedUpdateManyInput>
    /**
     * Filter which SectionProgresses to update
     */
    where?: SectionProgressWhereInput
    /**
     * Limit how many SectionProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionProgress upsert
   */
  export type SectionProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionProgress to update in case it exists.
     */
    where: SectionProgressWhereUniqueInput
    /**
     * In case the SectionProgress found by the `where` argument doesn't exist, create a new SectionProgress with this data.
     */
    create: XOR<SectionProgressCreateInput, SectionProgressUncheckedCreateInput>
    /**
     * In case the SectionProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionProgressUpdateInput, SectionProgressUncheckedUpdateInput>
  }

  /**
   * SectionProgress delete
   */
  export type SectionProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
    /**
     * Filter which SectionProgress to delete.
     */
    where: SectionProgressWhereUniqueInput
  }

  /**
   * SectionProgress deleteMany
   */
  export type SectionProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionProgresses to delete
     */
    where?: SectionProgressWhereInput
    /**
     * Limit how many SectionProgresses to delete.
     */
    limit?: number
  }

  /**
   * SectionProgress.videoProgress
   */
  export type SectionProgress$videoProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    where?: VideoProgressWhereInput
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    cursor?: VideoProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * SectionProgress without action
   */
  export type SectionProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionProgress
     */
    select?: SectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionProgress
     */
    omit?: SectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionProgressInclude<ExtArgs> | null
  }


  /**
   * Model VideoProgress
   */

  export type AggregateVideoProgress = {
    _count: VideoProgressCountAggregateOutputType | null
    _avg: VideoProgressAvgAggregateOutputType | null
    _sum: VideoProgressSumAggregateOutputType | null
    _min: VideoProgressMinAggregateOutputType | null
    _max: VideoProgressMaxAggregateOutputType | null
  }

  export type VideoProgressAvgAggregateOutputType = {
    video_duration: number | null
    watchedSeconds: number | null
    completionPercentage: number | null
  }

  export type VideoProgressSumAggregateOutputType = {
    video_duration: number | null
    watchedSeconds: number | null
    completionPercentage: number | null
  }

  export type VideoProgressMinAggregateOutputType = {
    id: string | null
    sectionProgressId: string | null
    videoSectionId: string | null
    video_duration: number | null
    userId: string | null
    watchedSeconds: number | null
    completionPercentage: number | null
    isCompleted: boolean | null
  }

  export type VideoProgressMaxAggregateOutputType = {
    id: string | null
    sectionProgressId: string | null
    videoSectionId: string | null
    video_duration: number | null
    userId: string | null
    watchedSeconds: number | null
    completionPercentage: number | null
    isCompleted: boolean | null
  }

  export type VideoProgressCountAggregateOutputType = {
    id: number
    sectionProgressId: number
    videoSectionId: number
    video_duration: number
    userId: number
    watchedSeconds: number
    completionPercentage: number
    isCompleted: number
    _all: number
  }


  export type VideoProgressAvgAggregateInputType = {
    video_duration?: true
    watchedSeconds?: true
    completionPercentage?: true
  }

  export type VideoProgressSumAggregateInputType = {
    video_duration?: true
    watchedSeconds?: true
    completionPercentage?: true
  }

  export type VideoProgressMinAggregateInputType = {
    id?: true
    sectionProgressId?: true
    videoSectionId?: true
    video_duration?: true
    userId?: true
    watchedSeconds?: true
    completionPercentage?: true
    isCompleted?: true
  }

  export type VideoProgressMaxAggregateInputType = {
    id?: true
    sectionProgressId?: true
    videoSectionId?: true
    video_duration?: true
    userId?: true
    watchedSeconds?: true
    completionPercentage?: true
    isCompleted?: true
  }

  export type VideoProgressCountAggregateInputType = {
    id?: true
    sectionProgressId?: true
    videoSectionId?: true
    video_duration?: true
    userId?: true
    watchedSeconds?: true
    completionPercentage?: true
    isCompleted?: true
    _all?: true
  }

  export type VideoProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoProgress to aggregate.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoProgresses
    **/
    _count?: true | VideoProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoProgressMaxAggregateInputType
  }

  export type GetVideoProgressAggregateType<T extends VideoProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoProgress[P]>
      : GetScalarType<T[P], AggregateVideoProgress[P]>
  }




  export type VideoProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoProgressWhereInput
    orderBy?: VideoProgressOrderByWithAggregationInput | VideoProgressOrderByWithAggregationInput[]
    by: VideoProgressScalarFieldEnum[] | VideoProgressScalarFieldEnum
    having?: VideoProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoProgressCountAggregateInputType | true
    _avg?: VideoProgressAvgAggregateInputType
    _sum?: VideoProgressSumAggregateInputType
    _min?: VideoProgressMinAggregateInputType
    _max?: VideoProgressMaxAggregateInputType
  }

  export type VideoProgressGroupByOutputType = {
    id: string
    sectionProgressId: string
    videoSectionId: string
    video_duration: number
    userId: string
    watchedSeconds: number
    completionPercentage: number
    isCompleted: boolean
    _count: VideoProgressCountAggregateOutputType | null
    _avg: VideoProgressAvgAggregateOutputType | null
    _sum: VideoProgressSumAggregateOutputType | null
    _min: VideoProgressMinAggregateOutputType | null
    _max: VideoProgressMaxAggregateOutputType | null
  }

  type GetVideoProgressGroupByPayload<T extends VideoProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoProgressGroupByOutputType[P]>
            : GetScalarType<T[P], VideoProgressGroupByOutputType[P]>
        }
      >
    >


  export type VideoProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionProgressId?: boolean
    videoSectionId?: boolean
    video_duration?: boolean
    userId?: boolean
    watchedSeconds?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    sectionProgress?: boolean | SectionProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProgress"]>

  export type VideoProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionProgressId?: boolean
    videoSectionId?: boolean
    video_duration?: boolean
    userId?: boolean
    watchedSeconds?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    sectionProgress?: boolean | SectionProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProgress"]>

  export type VideoProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionProgressId?: boolean
    videoSectionId?: boolean
    video_duration?: boolean
    userId?: boolean
    watchedSeconds?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
    sectionProgress?: boolean | SectionProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProgress"]>

  export type VideoProgressSelectScalar = {
    id?: boolean
    sectionProgressId?: boolean
    videoSectionId?: boolean
    video_duration?: boolean
    userId?: boolean
    watchedSeconds?: boolean
    completionPercentage?: boolean
    isCompleted?: boolean
  }

  export type VideoProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionProgressId" | "videoSectionId" | "video_duration" | "userId" | "watchedSeconds" | "completionPercentage" | "isCompleted", ExtArgs["result"]["videoProgress"]>
  export type VideoProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionProgress?: boolean | SectionProgressDefaultArgs<ExtArgs>
  }
  export type VideoProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionProgress?: boolean | SectionProgressDefaultArgs<ExtArgs>
  }
  export type VideoProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionProgress?: boolean | SectionProgressDefaultArgs<ExtArgs>
  }

  export type $VideoProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoProgress"
    objects: {
      sectionProgress: Prisma.$SectionProgressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionProgressId: string
      videoSectionId: string
      video_duration: number
      userId: string
      watchedSeconds: number
      completionPercentage: number
      isCompleted: boolean
    }, ExtArgs["result"]["videoProgress"]>
    composites: {}
  }

  type VideoProgressGetPayload<S extends boolean | null | undefined | VideoProgressDefaultArgs> = $Result.GetResult<Prisma.$VideoProgressPayload, S>

  type VideoProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoProgressCountAggregateInputType | true
    }

  export interface VideoProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoProgress'], meta: { name: 'VideoProgress' } }
    /**
     * Find zero or one VideoProgress that matches the filter.
     * @param {VideoProgressFindUniqueArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoProgressFindUniqueArgs>(args: SelectSubset<T, VideoProgressFindUniqueArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoProgressFindUniqueOrThrowArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressFindFirstArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoProgressFindFirstArgs>(args?: SelectSubset<T, VideoProgressFindFirstArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressFindFirstOrThrowArgs} args - Arguments to find a VideoProgress
     * @example
     * // Get one VideoProgress
     * const videoProgress = await prisma.videoProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoProgresses
     * const videoProgresses = await prisma.videoProgress.findMany()
     * 
     * // Get first 10 VideoProgresses
     * const videoProgresses = await prisma.videoProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoProgressWithIdOnly = await prisma.videoProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoProgressFindManyArgs>(args?: SelectSubset<T, VideoProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoProgress.
     * @param {VideoProgressCreateArgs} args - Arguments to create a VideoProgress.
     * @example
     * // Create one VideoProgress
     * const VideoProgress = await prisma.videoProgress.create({
     *   data: {
     *     // ... data to create a VideoProgress
     *   }
     * })
     * 
     */
    create<T extends VideoProgressCreateArgs>(args: SelectSubset<T, VideoProgressCreateArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoProgresses.
     * @param {VideoProgressCreateManyArgs} args - Arguments to create many VideoProgresses.
     * @example
     * // Create many VideoProgresses
     * const videoProgress = await prisma.videoProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoProgressCreateManyArgs>(args?: SelectSubset<T, VideoProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoProgresses and returns the data saved in the database.
     * @param {VideoProgressCreateManyAndReturnArgs} args - Arguments to create many VideoProgresses.
     * @example
     * // Create many VideoProgresses
     * const videoProgress = await prisma.videoProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoProgresses and only return the `id`
     * const videoProgressWithIdOnly = await prisma.videoProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoProgress.
     * @param {VideoProgressDeleteArgs} args - Arguments to delete one VideoProgress.
     * @example
     * // Delete one VideoProgress
     * const VideoProgress = await prisma.videoProgress.delete({
     *   where: {
     *     // ... filter to delete one VideoProgress
     *   }
     * })
     * 
     */
    delete<T extends VideoProgressDeleteArgs>(args: SelectSubset<T, VideoProgressDeleteArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoProgress.
     * @param {VideoProgressUpdateArgs} args - Arguments to update one VideoProgress.
     * @example
     * // Update one VideoProgress
     * const videoProgress = await prisma.videoProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoProgressUpdateArgs>(args: SelectSubset<T, VideoProgressUpdateArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoProgresses.
     * @param {VideoProgressDeleteManyArgs} args - Arguments to filter VideoProgresses to delete.
     * @example
     * // Delete a few VideoProgresses
     * const { count } = await prisma.videoProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoProgressDeleteManyArgs>(args?: SelectSubset<T, VideoProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoProgresses
     * const videoProgress = await prisma.videoProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoProgressUpdateManyArgs>(args: SelectSubset<T, VideoProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoProgresses and returns the data updated in the database.
     * @param {VideoProgressUpdateManyAndReturnArgs} args - Arguments to update many VideoProgresses.
     * @example
     * // Update many VideoProgresses
     * const videoProgress = await prisma.videoProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoProgresses and only return the `id`
     * const videoProgressWithIdOnly = await prisma.videoProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoProgress.
     * @param {VideoProgressUpsertArgs} args - Arguments to update or create a VideoProgress.
     * @example
     * // Update or create a VideoProgress
     * const videoProgress = await prisma.videoProgress.upsert({
     *   create: {
     *     // ... data to create a VideoProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoProgress we want to update
     *   }
     * })
     */
    upsert<T extends VideoProgressUpsertArgs>(args: SelectSubset<T, VideoProgressUpsertArgs<ExtArgs>>): Prisma__VideoProgressClient<$Result.GetResult<Prisma.$VideoProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressCountArgs} args - Arguments to filter VideoProgresses to count.
     * @example
     * // Count the number of VideoProgresses
     * const count = await prisma.videoProgress.count({
     *   where: {
     *     // ... the filter for the VideoProgresses we want to count
     *   }
     * })
    **/
    count<T extends VideoProgressCountArgs>(
      args?: Subset<T, VideoProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoProgressAggregateArgs>(args: Subset<T, VideoProgressAggregateArgs>): Prisma.PrismaPromise<GetVideoProgressAggregateType<T>>

    /**
     * Group by VideoProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProgressGroupByArgs} args - Group by arguments.
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
      T extends VideoProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoProgressGroupByArgs['orderBy'] }
        : { orderBy?: VideoProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoProgress model
   */
  readonly fields: VideoProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sectionProgress<T extends SectionProgressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionProgressDefaultArgs<ExtArgs>>): Prisma__SectionProgressClient<$Result.GetResult<Prisma.$SectionProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoProgress model
   */
  interface VideoProgressFieldRefs {
    readonly id: FieldRef<"VideoProgress", 'String'>
    readonly sectionProgressId: FieldRef<"VideoProgress", 'String'>
    readonly videoSectionId: FieldRef<"VideoProgress", 'String'>
    readonly video_duration: FieldRef<"VideoProgress", 'Float'>
    readonly userId: FieldRef<"VideoProgress", 'String'>
    readonly watchedSeconds: FieldRef<"VideoProgress", 'Float'>
    readonly completionPercentage: FieldRef<"VideoProgress", 'Float'>
    readonly isCompleted: FieldRef<"VideoProgress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VideoProgress findUnique
   */
  export type VideoProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress findUniqueOrThrow
   */
  export type VideoProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress findFirst
   */
  export type VideoProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoProgresses.
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoProgresses.
     */
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * VideoProgress findFirstOrThrow
   */
  export type VideoProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgress to fetch.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoProgresses.
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoProgresses.
     */
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * VideoProgress findMany
   */
  export type VideoProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter, which VideoProgresses to fetch.
     */
    where?: VideoProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProgresses to fetch.
     */
    orderBy?: VideoProgressOrderByWithRelationInput | VideoProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoProgresses.
     */
    cursor?: VideoProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProgresses.
     */
    skip?: number
    distinct?: VideoProgressScalarFieldEnum | VideoProgressScalarFieldEnum[]
  }

  /**
   * VideoProgress create
   */
  export type VideoProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoProgress.
     */
    data: XOR<VideoProgressCreateInput, VideoProgressUncheckedCreateInput>
  }

  /**
   * VideoProgress createMany
   */
  export type VideoProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoProgresses.
     */
    data: VideoProgressCreateManyInput | VideoProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoProgress createManyAndReturn
   */
  export type VideoProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * The data used to create many VideoProgresses.
     */
    data: VideoProgressCreateManyInput | VideoProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoProgress update
   */
  export type VideoProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoProgress.
     */
    data: XOR<VideoProgressUpdateInput, VideoProgressUncheckedUpdateInput>
    /**
     * Choose, which VideoProgress to update.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress updateMany
   */
  export type VideoProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoProgresses.
     */
    data: XOR<VideoProgressUpdateManyMutationInput, VideoProgressUncheckedUpdateManyInput>
    /**
     * Filter which VideoProgresses to update
     */
    where?: VideoProgressWhereInput
    /**
     * Limit how many VideoProgresses to update.
     */
    limit?: number
  }

  /**
   * VideoProgress updateManyAndReturn
   */
  export type VideoProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * The data used to update VideoProgresses.
     */
    data: XOR<VideoProgressUpdateManyMutationInput, VideoProgressUncheckedUpdateManyInput>
    /**
     * Filter which VideoProgresses to update
     */
    where?: VideoProgressWhereInput
    /**
     * Limit how many VideoProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoProgress upsert
   */
  export type VideoProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoProgress to update in case it exists.
     */
    where: VideoProgressWhereUniqueInput
    /**
     * In case the VideoProgress found by the `where` argument doesn't exist, create a new VideoProgress with this data.
     */
    create: XOR<VideoProgressCreateInput, VideoProgressUncheckedCreateInput>
    /**
     * In case the VideoProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoProgressUpdateInput, VideoProgressUncheckedUpdateInput>
  }

  /**
   * VideoProgress delete
   */
  export type VideoProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
    /**
     * Filter which VideoProgress to delete.
     */
    where: VideoProgressWhereUniqueInput
  }

  /**
   * VideoProgress deleteMany
   */
  export type VideoProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoProgresses to delete
     */
    where?: VideoProgressWhereInput
    /**
     * Limit how many VideoProgresses to delete.
     */
    limit?: number
  }

  /**
   * VideoProgress without action
   */
  export type VideoProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProgress
     */
    select?: VideoProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProgress
     */
    omit?: VideoProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProgressInclude<ExtArgs> | null
  }


  /**
   * Model FilterPreset
   */

  export type AggregateFilterPreset = {
    _count: FilterPresetCountAggregateOutputType | null
    _min: FilterPresetMinAggregateOutputType | null
    _max: FilterPresetMaxAggregateOutputType | null
  }

  export type FilterPresetMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type FilterPresetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type FilterPresetCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type FilterPresetMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FilterPresetMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FilterPresetCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type FilterPresetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterPreset to aggregate.
     */
    where?: FilterPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterPresets to fetch.
     */
    orderBy?: FilterPresetOrderByWithRelationInput | FilterPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterPresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilterPresets
    **/
    _count?: true | FilterPresetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterPresetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterPresetMaxAggregateInputType
  }

  export type GetFilterPresetAggregateType<T extends FilterPresetAggregateArgs> = {
        [P in keyof T & keyof AggregateFilterPreset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilterPreset[P]>
      : GetScalarType<T[P], AggregateFilterPreset[P]>
  }




  export type FilterPresetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterPresetWhereInput
    orderBy?: FilterPresetOrderByWithAggregationInput | FilterPresetOrderByWithAggregationInput[]
    by: FilterPresetScalarFieldEnum[] | FilterPresetScalarFieldEnum
    having?: FilterPresetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterPresetCountAggregateInputType | true
    _min?: FilterPresetMinAggregateInputType
    _max?: FilterPresetMaxAggregateInputType
  }

  export type FilterPresetGroupByOutputType = {
    id: string
    userId: string
    _count: FilterPresetCountAggregateOutputType | null
    _min: FilterPresetMinAggregateOutputType | null
    _max: FilterPresetMaxAggregateOutputType | null
  }

  type GetFilterPresetGroupByPayload<T extends FilterPresetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterPresetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterPresetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterPresetGroupByOutputType[P]>
            : GetScalarType<T[P], FilterPresetGroupByOutputType[P]>
        }
      >
    >


  export type FilterPresetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    SavedFilterData?: boolean | FilterPreset$SavedFilterDataArgs<ExtArgs>
    _count?: boolean | FilterPresetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filterPreset"]>

  export type FilterPresetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
  }, ExtArgs["result"]["filterPreset"]>

  export type FilterPresetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
  }, ExtArgs["result"]["filterPreset"]>

  export type FilterPresetSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type FilterPresetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["filterPreset"]>
  export type FilterPresetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SavedFilterData?: boolean | FilterPreset$SavedFilterDataArgs<ExtArgs>
    _count?: boolean | FilterPresetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilterPresetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FilterPresetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilterPresetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilterPreset"
    objects: {
      SavedFilterData: Prisma.$SavedFilterDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["filterPreset"]>
    composites: {}
  }

  type FilterPresetGetPayload<S extends boolean | null | undefined | FilterPresetDefaultArgs> = $Result.GetResult<Prisma.$FilterPresetPayload, S>

  type FilterPresetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterPresetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterPresetCountAggregateInputType | true
    }

  export interface FilterPresetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilterPreset'], meta: { name: 'FilterPreset' } }
    /**
     * Find zero or one FilterPreset that matches the filter.
     * @param {FilterPresetFindUniqueArgs} args - Arguments to find a FilterPreset
     * @example
     * // Get one FilterPreset
     * const filterPreset = await prisma.filterPreset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterPresetFindUniqueArgs>(args: SelectSubset<T, FilterPresetFindUniqueArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilterPreset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterPresetFindUniqueOrThrowArgs} args - Arguments to find a FilterPreset
     * @example
     * // Get one FilterPreset
     * const filterPreset = await prisma.filterPreset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterPresetFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterPresetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterPreset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterPresetFindFirstArgs} args - Arguments to find a FilterPreset
     * @example
     * // Get one FilterPreset
     * const filterPreset = await prisma.filterPreset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterPresetFindFirstArgs>(args?: SelectSubset<T, FilterPresetFindFirstArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterPreset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterPresetFindFirstOrThrowArgs} args - Arguments to find a FilterPreset
     * @example
     * // Get one FilterPreset
     * const filterPreset = await prisma.filterPreset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterPresetFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterPresetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterPresets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterPresetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilterPresets
     * const filterPresets = await prisma.filterPreset.findMany()
     * 
     * // Get first 10 FilterPresets
     * const filterPresets = await prisma.filterPreset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterPresetWithIdOnly = await prisma.filterPreset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterPresetFindManyArgs>(args?: SelectSubset<T, FilterPresetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilterPreset.
     * @param {FilterPresetCreateArgs} args - Arguments to create a FilterPreset.
     * @example
     * // Create one FilterPreset
     * const FilterPreset = await prisma.filterPreset.create({
     *   data: {
     *     // ... data to create a FilterPreset
     *   }
     * })
     * 
     */
    create<T extends FilterPresetCreateArgs>(args: SelectSubset<T, FilterPresetCreateArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilterPresets.
     * @param {FilterPresetCreateManyArgs} args - Arguments to create many FilterPresets.
     * @example
     * // Create many FilterPresets
     * const filterPreset = await prisma.filterPreset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterPresetCreateManyArgs>(args?: SelectSubset<T, FilterPresetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilterPresets and returns the data saved in the database.
     * @param {FilterPresetCreateManyAndReturnArgs} args - Arguments to create many FilterPresets.
     * @example
     * // Create many FilterPresets
     * const filterPreset = await prisma.filterPreset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilterPresets and only return the `id`
     * const filterPresetWithIdOnly = await prisma.filterPreset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilterPresetCreateManyAndReturnArgs>(args?: SelectSubset<T, FilterPresetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilterPreset.
     * @param {FilterPresetDeleteArgs} args - Arguments to delete one FilterPreset.
     * @example
     * // Delete one FilterPreset
     * const FilterPreset = await prisma.filterPreset.delete({
     *   where: {
     *     // ... filter to delete one FilterPreset
     *   }
     * })
     * 
     */
    delete<T extends FilterPresetDeleteArgs>(args: SelectSubset<T, FilterPresetDeleteArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilterPreset.
     * @param {FilterPresetUpdateArgs} args - Arguments to update one FilterPreset.
     * @example
     * // Update one FilterPreset
     * const filterPreset = await prisma.filterPreset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterPresetUpdateArgs>(args: SelectSubset<T, FilterPresetUpdateArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilterPresets.
     * @param {FilterPresetDeleteManyArgs} args - Arguments to filter FilterPresets to delete.
     * @example
     * // Delete a few FilterPresets
     * const { count } = await prisma.filterPreset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterPresetDeleteManyArgs>(args?: SelectSubset<T, FilterPresetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterPresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterPresetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilterPresets
     * const filterPreset = await prisma.filterPreset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterPresetUpdateManyArgs>(args: SelectSubset<T, FilterPresetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterPresets and returns the data updated in the database.
     * @param {FilterPresetUpdateManyAndReturnArgs} args - Arguments to update many FilterPresets.
     * @example
     * // Update many FilterPresets
     * const filterPreset = await prisma.filterPreset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilterPresets and only return the `id`
     * const filterPresetWithIdOnly = await prisma.filterPreset.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilterPresetUpdateManyAndReturnArgs>(args: SelectSubset<T, FilterPresetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilterPreset.
     * @param {FilterPresetUpsertArgs} args - Arguments to update or create a FilterPreset.
     * @example
     * // Update or create a FilterPreset
     * const filterPreset = await prisma.filterPreset.upsert({
     *   create: {
     *     // ... data to create a FilterPreset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilterPreset we want to update
     *   }
     * })
     */
    upsert<T extends FilterPresetUpsertArgs>(args: SelectSubset<T, FilterPresetUpsertArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilterPresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterPresetCountArgs} args - Arguments to filter FilterPresets to count.
     * @example
     * // Count the number of FilterPresets
     * const count = await prisma.filterPreset.count({
     *   where: {
     *     // ... the filter for the FilterPresets we want to count
     *   }
     * })
    **/
    count<T extends FilterPresetCountArgs>(
      args?: Subset<T, FilterPresetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterPresetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilterPreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterPresetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilterPresetAggregateArgs>(args: Subset<T, FilterPresetAggregateArgs>): Prisma.PrismaPromise<GetFilterPresetAggregateType<T>>

    /**
     * Group by FilterPreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterPresetGroupByArgs} args - Group by arguments.
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
      T extends FilterPresetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterPresetGroupByArgs['orderBy'] }
        : { orderBy?: FilterPresetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilterPresetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterPresetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilterPreset model
   */
  readonly fields: FilterPresetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilterPreset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterPresetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SavedFilterData<T extends FilterPreset$SavedFilterDataArgs<ExtArgs> = {}>(args?: Subset<T, FilterPreset$SavedFilterDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FilterPreset model
   */
  interface FilterPresetFieldRefs {
    readonly id: FieldRef<"FilterPreset", 'String'>
    readonly userId: FieldRef<"FilterPreset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FilterPreset findUnique
   */
  export type FilterPresetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * Filter, which FilterPreset to fetch.
     */
    where: FilterPresetWhereUniqueInput
  }

  /**
   * FilterPreset findUniqueOrThrow
   */
  export type FilterPresetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * Filter, which FilterPreset to fetch.
     */
    where: FilterPresetWhereUniqueInput
  }

  /**
   * FilterPreset findFirst
   */
  export type FilterPresetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * Filter, which FilterPreset to fetch.
     */
    where?: FilterPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterPresets to fetch.
     */
    orderBy?: FilterPresetOrderByWithRelationInput | FilterPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterPresets.
     */
    cursor?: FilterPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterPresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterPresets.
     */
    distinct?: FilterPresetScalarFieldEnum | FilterPresetScalarFieldEnum[]
  }

  /**
   * FilterPreset findFirstOrThrow
   */
  export type FilterPresetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * Filter, which FilterPreset to fetch.
     */
    where?: FilterPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterPresets to fetch.
     */
    orderBy?: FilterPresetOrderByWithRelationInput | FilterPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterPresets.
     */
    cursor?: FilterPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterPresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterPresets.
     */
    distinct?: FilterPresetScalarFieldEnum | FilterPresetScalarFieldEnum[]
  }

  /**
   * FilterPreset findMany
   */
  export type FilterPresetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * Filter, which FilterPresets to fetch.
     */
    where?: FilterPresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterPresets to fetch.
     */
    orderBy?: FilterPresetOrderByWithRelationInput | FilterPresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilterPresets.
     */
    cursor?: FilterPresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterPresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterPresets.
     */
    skip?: number
    distinct?: FilterPresetScalarFieldEnum | FilterPresetScalarFieldEnum[]
  }

  /**
   * FilterPreset create
   */
  export type FilterPresetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * The data needed to create a FilterPreset.
     */
    data: XOR<FilterPresetCreateInput, FilterPresetUncheckedCreateInput>
  }

  /**
   * FilterPreset createMany
   */
  export type FilterPresetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilterPresets.
     */
    data: FilterPresetCreateManyInput | FilterPresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilterPreset createManyAndReturn
   */
  export type FilterPresetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * The data used to create many FilterPresets.
     */
    data: FilterPresetCreateManyInput | FilterPresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilterPreset update
   */
  export type FilterPresetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * The data needed to update a FilterPreset.
     */
    data: XOR<FilterPresetUpdateInput, FilterPresetUncheckedUpdateInput>
    /**
     * Choose, which FilterPreset to update.
     */
    where: FilterPresetWhereUniqueInput
  }

  /**
   * FilterPreset updateMany
   */
  export type FilterPresetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilterPresets.
     */
    data: XOR<FilterPresetUpdateManyMutationInput, FilterPresetUncheckedUpdateManyInput>
    /**
     * Filter which FilterPresets to update
     */
    where?: FilterPresetWhereInput
    /**
     * Limit how many FilterPresets to update.
     */
    limit?: number
  }

  /**
   * FilterPreset updateManyAndReturn
   */
  export type FilterPresetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * The data used to update FilterPresets.
     */
    data: XOR<FilterPresetUpdateManyMutationInput, FilterPresetUncheckedUpdateManyInput>
    /**
     * Filter which FilterPresets to update
     */
    where?: FilterPresetWhereInput
    /**
     * Limit how many FilterPresets to update.
     */
    limit?: number
  }

  /**
   * FilterPreset upsert
   */
  export type FilterPresetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * The filter to search for the FilterPreset to update in case it exists.
     */
    where: FilterPresetWhereUniqueInput
    /**
     * In case the FilterPreset found by the `where` argument doesn't exist, create a new FilterPreset with this data.
     */
    create: XOR<FilterPresetCreateInput, FilterPresetUncheckedCreateInput>
    /**
     * In case the FilterPreset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterPresetUpdateInput, FilterPresetUncheckedUpdateInput>
  }

  /**
   * FilterPreset delete
   */
  export type FilterPresetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
    /**
     * Filter which FilterPreset to delete.
     */
    where: FilterPresetWhereUniqueInput
  }

  /**
   * FilterPreset deleteMany
   */
  export type FilterPresetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterPresets to delete
     */
    where?: FilterPresetWhereInput
    /**
     * Limit how many FilterPresets to delete.
     */
    limit?: number
  }

  /**
   * FilterPreset.SavedFilterData
   */
  export type FilterPreset$SavedFilterDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    where?: SavedFilterDataWhereInput
    orderBy?: SavedFilterDataOrderByWithRelationInput | SavedFilterDataOrderByWithRelationInput[]
    cursor?: SavedFilterDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedFilterDataScalarFieldEnum | SavedFilterDataScalarFieldEnum[]
  }

  /**
   * FilterPreset without action
   */
  export type FilterPresetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterPreset
     */
    select?: FilterPresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterPreset
     */
    omit?: FilterPresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterPresetInclude<ExtArgs> | null
  }


  /**
   * Model SavedFilterData
   */

  export type AggregateSavedFilterData = {
    _count: SavedFilterDataCountAggregateOutputType | null
    _avg: SavedFilterDataAvgAggregateOutputType | null
    _sum: SavedFilterDataSumAggregateOutputType | null
    _min: SavedFilterDataMinAggregateOutputType | null
    _max: SavedFilterDataMaxAggregateOutputType | null
  }

  export type SavedFilterDataAvgAggregateOutputType = {
    priceRange: number | null
  }

  export type SavedFilterDataSumAggregateOutputType = {
    priceRange: number[]
  }

  export type SavedFilterDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    FilterPresetId: string | null
  }

  export type SavedFilterDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    FilterPresetId: string | null
  }

  export type SavedFilterDataCountAggregateOutputType = {
    id: number
    name: number
    selectedRating: number
    priceRange: number
    FilterPresetId: number
    _all: number
  }


  export type SavedFilterDataAvgAggregateInputType = {
    priceRange?: true
  }

  export type SavedFilterDataSumAggregateInputType = {
    priceRange?: true
  }

  export type SavedFilterDataMinAggregateInputType = {
    id?: true
    name?: true
    FilterPresetId?: true
  }

  export type SavedFilterDataMaxAggregateInputType = {
    id?: true
    name?: true
    FilterPresetId?: true
  }

  export type SavedFilterDataCountAggregateInputType = {
    id?: true
    name?: true
    selectedRating?: true
    priceRange?: true
    FilterPresetId?: true
    _all?: true
  }

  export type SavedFilterDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedFilterData to aggregate.
     */
    where?: SavedFilterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedFilterData to fetch.
     */
    orderBy?: SavedFilterDataOrderByWithRelationInput | SavedFilterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedFilterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedFilterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedFilterData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedFilterData
    **/
    _count?: true | SavedFilterDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedFilterDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedFilterDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedFilterDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedFilterDataMaxAggregateInputType
  }

  export type GetSavedFilterDataAggregateType<T extends SavedFilterDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedFilterData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedFilterData[P]>
      : GetScalarType<T[P], AggregateSavedFilterData[P]>
  }




  export type SavedFilterDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedFilterDataWhereInput
    orderBy?: SavedFilterDataOrderByWithAggregationInput | SavedFilterDataOrderByWithAggregationInput[]
    by: SavedFilterDataScalarFieldEnum[] | SavedFilterDataScalarFieldEnum
    having?: SavedFilterDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedFilterDataCountAggregateInputType | true
    _avg?: SavedFilterDataAvgAggregateInputType
    _sum?: SavedFilterDataSumAggregateInputType
    _min?: SavedFilterDataMinAggregateInputType
    _max?: SavedFilterDataMaxAggregateInputType
  }

  export type SavedFilterDataGroupByOutputType = {
    id: string
    name: string
    selectedRating: string[]
    priceRange: number[]
    FilterPresetId: string
    _count: SavedFilterDataCountAggregateOutputType | null
    _avg: SavedFilterDataAvgAggregateOutputType | null
    _sum: SavedFilterDataSumAggregateOutputType | null
    _min: SavedFilterDataMinAggregateOutputType | null
    _max: SavedFilterDataMaxAggregateOutputType | null
  }

  type GetSavedFilterDataGroupByPayload<T extends SavedFilterDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedFilterDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedFilterDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedFilterDataGroupByOutputType[P]>
            : GetScalarType<T[P], SavedFilterDataGroupByOutputType[P]>
        }
      >
    >


  export type SavedFilterDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    selectedRating?: boolean
    priceRange?: boolean
    FilterPresetId?: boolean
    FilterPreset?: boolean | FilterPresetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedFilterData"]>

  export type SavedFilterDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    selectedRating?: boolean
    priceRange?: boolean
    FilterPresetId?: boolean
    FilterPreset?: boolean | FilterPresetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedFilterData"]>

  export type SavedFilterDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    selectedRating?: boolean
    priceRange?: boolean
    FilterPresetId?: boolean
    FilterPreset?: boolean | FilterPresetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedFilterData"]>

  export type SavedFilterDataSelectScalar = {
    id?: boolean
    name?: boolean
    selectedRating?: boolean
    priceRange?: boolean
    FilterPresetId?: boolean
  }

  export type SavedFilterDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "selectedRating" | "priceRange" | "FilterPresetId", ExtArgs["result"]["savedFilterData"]>
  export type SavedFilterDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FilterPreset?: boolean | FilterPresetDefaultArgs<ExtArgs>
  }
  export type SavedFilterDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FilterPreset?: boolean | FilterPresetDefaultArgs<ExtArgs>
  }
  export type SavedFilterDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FilterPreset?: boolean | FilterPresetDefaultArgs<ExtArgs>
  }

  export type $SavedFilterDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedFilterData"
    objects: {
      FilterPreset: Prisma.$FilterPresetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      selectedRating: string[]
      priceRange: number[]
      FilterPresetId: string
    }, ExtArgs["result"]["savedFilterData"]>
    composites: {}
  }

  type SavedFilterDataGetPayload<S extends boolean | null | undefined | SavedFilterDataDefaultArgs> = $Result.GetResult<Prisma.$SavedFilterDataPayload, S>

  type SavedFilterDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedFilterDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedFilterDataCountAggregateInputType | true
    }

  export interface SavedFilterDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedFilterData'], meta: { name: 'SavedFilterData' } }
    /**
     * Find zero or one SavedFilterData that matches the filter.
     * @param {SavedFilterDataFindUniqueArgs} args - Arguments to find a SavedFilterData
     * @example
     * // Get one SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedFilterDataFindUniqueArgs>(args: SelectSubset<T, SavedFilterDataFindUniqueArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedFilterData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedFilterDataFindUniqueOrThrowArgs} args - Arguments to find a SavedFilterData
     * @example
     * // Get one SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedFilterDataFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedFilterDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedFilterData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedFilterDataFindFirstArgs} args - Arguments to find a SavedFilterData
     * @example
     * // Get one SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedFilterDataFindFirstArgs>(args?: SelectSubset<T, SavedFilterDataFindFirstArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedFilterData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedFilterDataFindFirstOrThrowArgs} args - Arguments to find a SavedFilterData
     * @example
     * // Get one SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedFilterDataFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedFilterDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedFilterData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedFilterDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.findMany()
     * 
     * // Get first 10 SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedFilterDataWithIdOnly = await prisma.savedFilterData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedFilterDataFindManyArgs>(args?: SelectSubset<T, SavedFilterDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedFilterData.
     * @param {SavedFilterDataCreateArgs} args - Arguments to create a SavedFilterData.
     * @example
     * // Create one SavedFilterData
     * const SavedFilterData = await prisma.savedFilterData.create({
     *   data: {
     *     // ... data to create a SavedFilterData
     *   }
     * })
     * 
     */
    create<T extends SavedFilterDataCreateArgs>(args: SelectSubset<T, SavedFilterDataCreateArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedFilterData.
     * @param {SavedFilterDataCreateManyArgs} args - Arguments to create many SavedFilterData.
     * @example
     * // Create many SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedFilterDataCreateManyArgs>(args?: SelectSubset<T, SavedFilterDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedFilterData and returns the data saved in the database.
     * @param {SavedFilterDataCreateManyAndReturnArgs} args - Arguments to create many SavedFilterData.
     * @example
     * // Create many SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedFilterData and only return the `id`
     * const savedFilterDataWithIdOnly = await prisma.savedFilterData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedFilterDataCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedFilterDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedFilterData.
     * @param {SavedFilterDataDeleteArgs} args - Arguments to delete one SavedFilterData.
     * @example
     * // Delete one SavedFilterData
     * const SavedFilterData = await prisma.savedFilterData.delete({
     *   where: {
     *     // ... filter to delete one SavedFilterData
     *   }
     * })
     * 
     */
    delete<T extends SavedFilterDataDeleteArgs>(args: SelectSubset<T, SavedFilterDataDeleteArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedFilterData.
     * @param {SavedFilterDataUpdateArgs} args - Arguments to update one SavedFilterData.
     * @example
     * // Update one SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedFilterDataUpdateArgs>(args: SelectSubset<T, SavedFilterDataUpdateArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedFilterData.
     * @param {SavedFilterDataDeleteManyArgs} args - Arguments to filter SavedFilterData to delete.
     * @example
     * // Delete a few SavedFilterData
     * const { count } = await prisma.savedFilterData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedFilterDataDeleteManyArgs>(args?: SelectSubset<T, SavedFilterDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedFilterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedFilterDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedFilterDataUpdateManyArgs>(args: SelectSubset<T, SavedFilterDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedFilterData and returns the data updated in the database.
     * @param {SavedFilterDataUpdateManyAndReturnArgs} args - Arguments to update many SavedFilterData.
     * @example
     * // Update many SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedFilterData and only return the `id`
     * const savedFilterDataWithIdOnly = await prisma.savedFilterData.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedFilterDataUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedFilterDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedFilterData.
     * @param {SavedFilterDataUpsertArgs} args - Arguments to update or create a SavedFilterData.
     * @example
     * // Update or create a SavedFilterData
     * const savedFilterData = await prisma.savedFilterData.upsert({
     *   create: {
     *     // ... data to create a SavedFilterData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedFilterData we want to update
     *   }
     * })
     */
    upsert<T extends SavedFilterDataUpsertArgs>(args: SelectSubset<T, SavedFilterDataUpsertArgs<ExtArgs>>): Prisma__SavedFilterDataClient<$Result.GetResult<Prisma.$SavedFilterDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedFilterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedFilterDataCountArgs} args - Arguments to filter SavedFilterData to count.
     * @example
     * // Count the number of SavedFilterData
     * const count = await prisma.savedFilterData.count({
     *   where: {
     *     // ... the filter for the SavedFilterData we want to count
     *   }
     * })
    **/
    count<T extends SavedFilterDataCountArgs>(
      args?: Subset<T, SavedFilterDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedFilterDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedFilterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedFilterDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedFilterDataAggregateArgs>(args: Subset<T, SavedFilterDataAggregateArgs>): Prisma.PrismaPromise<GetSavedFilterDataAggregateType<T>>

    /**
     * Group by SavedFilterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedFilterDataGroupByArgs} args - Group by arguments.
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
      T extends SavedFilterDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedFilterDataGroupByArgs['orderBy'] }
        : { orderBy?: SavedFilterDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedFilterDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedFilterDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedFilterData model
   */
  readonly fields: SavedFilterDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedFilterData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedFilterDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FilterPreset<T extends FilterPresetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilterPresetDefaultArgs<ExtArgs>>): Prisma__FilterPresetClient<$Result.GetResult<Prisma.$FilterPresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedFilterData model
   */
  interface SavedFilterDataFieldRefs {
    readonly id: FieldRef<"SavedFilterData", 'String'>
    readonly name: FieldRef<"SavedFilterData", 'String'>
    readonly selectedRating: FieldRef<"SavedFilterData", 'String[]'>
    readonly priceRange: FieldRef<"SavedFilterData", 'Int[]'>
    readonly FilterPresetId: FieldRef<"SavedFilterData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavedFilterData findUnique
   */
  export type SavedFilterDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * Filter, which SavedFilterData to fetch.
     */
    where: SavedFilterDataWhereUniqueInput
  }

  /**
   * SavedFilterData findUniqueOrThrow
   */
  export type SavedFilterDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * Filter, which SavedFilterData to fetch.
     */
    where: SavedFilterDataWhereUniqueInput
  }

  /**
   * SavedFilterData findFirst
   */
  export type SavedFilterDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * Filter, which SavedFilterData to fetch.
     */
    where?: SavedFilterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedFilterData to fetch.
     */
    orderBy?: SavedFilterDataOrderByWithRelationInput | SavedFilterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedFilterData.
     */
    cursor?: SavedFilterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedFilterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedFilterData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedFilterData.
     */
    distinct?: SavedFilterDataScalarFieldEnum | SavedFilterDataScalarFieldEnum[]
  }

  /**
   * SavedFilterData findFirstOrThrow
   */
  export type SavedFilterDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * Filter, which SavedFilterData to fetch.
     */
    where?: SavedFilterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedFilterData to fetch.
     */
    orderBy?: SavedFilterDataOrderByWithRelationInput | SavedFilterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedFilterData.
     */
    cursor?: SavedFilterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedFilterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedFilterData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedFilterData.
     */
    distinct?: SavedFilterDataScalarFieldEnum | SavedFilterDataScalarFieldEnum[]
  }

  /**
   * SavedFilterData findMany
   */
  export type SavedFilterDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * Filter, which SavedFilterData to fetch.
     */
    where?: SavedFilterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedFilterData to fetch.
     */
    orderBy?: SavedFilterDataOrderByWithRelationInput | SavedFilterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedFilterData.
     */
    cursor?: SavedFilterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedFilterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedFilterData.
     */
    skip?: number
    distinct?: SavedFilterDataScalarFieldEnum | SavedFilterDataScalarFieldEnum[]
  }

  /**
   * SavedFilterData create
   */
  export type SavedFilterDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedFilterData.
     */
    data: XOR<SavedFilterDataCreateInput, SavedFilterDataUncheckedCreateInput>
  }

  /**
   * SavedFilterData createMany
   */
  export type SavedFilterDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedFilterData.
     */
    data: SavedFilterDataCreateManyInput | SavedFilterDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedFilterData createManyAndReturn
   */
  export type SavedFilterDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * The data used to create many SavedFilterData.
     */
    data: SavedFilterDataCreateManyInput | SavedFilterDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedFilterData update
   */
  export type SavedFilterDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedFilterData.
     */
    data: XOR<SavedFilterDataUpdateInput, SavedFilterDataUncheckedUpdateInput>
    /**
     * Choose, which SavedFilterData to update.
     */
    where: SavedFilterDataWhereUniqueInput
  }

  /**
   * SavedFilterData updateMany
   */
  export type SavedFilterDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedFilterData.
     */
    data: XOR<SavedFilterDataUpdateManyMutationInput, SavedFilterDataUncheckedUpdateManyInput>
    /**
     * Filter which SavedFilterData to update
     */
    where?: SavedFilterDataWhereInput
    /**
     * Limit how many SavedFilterData to update.
     */
    limit?: number
  }

  /**
   * SavedFilterData updateManyAndReturn
   */
  export type SavedFilterDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * The data used to update SavedFilterData.
     */
    data: XOR<SavedFilterDataUpdateManyMutationInput, SavedFilterDataUncheckedUpdateManyInput>
    /**
     * Filter which SavedFilterData to update
     */
    where?: SavedFilterDataWhereInput
    /**
     * Limit how many SavedFilterData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedFilterData upsert
   */
  export type SavedFilterDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedFilterData to update in case it exists.
     */
    where: SavedFilterDataWhereUniqueInput
    /**
     * In case the SavedFilterData found by the `where` argument doesn't exist, create a new SavedFilterData with this data.
     */
    create: XOR<SavedFilterDataCreateInput, SavedFilterDataUncheckedCreateInput>
    /**
     * In case the SavedFilterData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedFilterDataUpdateInput, SavedFilterDataUncheckedUpdateInput>
  }

  /**
   * SavedFilterData delete
   */
  export type SavedFilterDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
    /**
     * Filter which SavedFilterData to delete.
     */
    where: SavedFilterDataWhereUniqueInput
  }

  /**
   * SavedFilterData deleteMany
   */
  export type SavedFilterDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedFilterData to delete
     */
    where?: SavedFilterDataWhereInput
    /**
     * Limit how many SavedFilterData to delete.
     */
    limit?: number
  }

  /**
   * SavedFilterData without action
   */
  export type SavedFilterDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedFilterData
     */
    select?: SavedFilterDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedFilterData
     */
    omit?: SavedFilterDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedFilterDataInclude<ExtArgs> | null
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


  export const CourseScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    ownerName: 'ownerName',
    title: 'title',
    description: 'description',
    price: 'price',
    main_image: 'main_image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    sectionName: 'sectionName',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const VideoSectionScalarFieldEnum: {
    id: 'id',
    video_title: 'video_title',
    video_url: 'video_url',
    video_public_id: 'video_public_id',
    video_thumbnailUrl: 'video_thumbnailUrl',
    video_duration: 'video_duration',
    sectionId: 'sectionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoSectionScalarFieldEnum = (typeof VideoSectionScalarFieldEnum)[keyof typeof VideoSectionScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    value: 'value',
    courseId: 'courseId',
    userId: 'userId'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const EnrolledStudentsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    amount: 'amount',
    currency: 'currency',
    payment_status: 'payment_status',
    studentId: 'studentId',
    email: 'email',
    contact: 'contact',
    invoice_name: 'invoice_name',
    created_at: 'created_at',
    courseId: 'courseId'
  };

  export type EnrolledStudentsScalarFieldEnum = (typeof EnrolledStudentsScalarFieldEnum)[keyof typeof EnrolledStudentsScalarFieldEnum]


  export const CourseProgressScalarFieldEnum: {
    id: 'id',
    enrolledStudentId: 'enrolledStudentId',
    courseId: 'courseId',
    studentId: 'studentId',
    completionPercentage: 'completionPercentage',
    isCompleted: 'isCompleted'
  };

  export type CourseProgressScalarFieldEnum = (typeof CourseProgressScalarFieldEnum)[keyof typeof CourseProgressScalarFieldEnum]


  export const SectionProgressScalarFieldEnum: {
    id: 'id',
    courseProgressId: 'courseProgressId',
    sectionId: 'sectionId',
    completionPercentage: 'completionPercentage',
    isCompleted: 'isCompleted'
  };

  export type SectionProgressScalarFieldEnum = (typeof SectionProgressScalarFieldEnum)[keyof typeof SectionProgressScalarFieldEnum]


  export const VideoProgressScalarFieldEnum: {
    id: 'id',
    sectionProgressId: 'sectionProgressId',
    videoSectionId: 'videoSectionId',
    video_duration: 'video_duration',
    userId: 'userId',
    watchedSeconds: 'watchedSeconds',
    completionPercentage: 'completionPercentage',
    isCompleted: 'isCompleted'
  };

  export type VideoProgressScalarFieldEnum = (typeof VideoProgressScalarFieldEnum)[keyof typeof VideoProgressScalarFieldEnum]


  export const FilterPresetScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type FilterPresetScalarFieldEnum = (typeof FilterPresetScalarFieldEnum)[keyof typeof FilterPresetScalarFieldEnum]


  export const SavedFilterDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    selectedRating: 'selectedRating',
    priceRange: 'priceRange',
    FilterPresetId: 'FilterPresetId'
  };

  export type SavedFilterDataScalarFieldEnum = (typeof SavedFilterDataScalarFieldEnum)[keyof typeof SavedFilterDataScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'payment_status[]'
   */
  export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    owner?: StringFilter<"Course"> | string
    ownerName?: StringNullableFilter<"Course"> | string | null
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    main_image?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    section?: SectionListRelationFilter
    rating?: RatingListRelationFilter
    enrolledStudents?: EnrolledStudentsListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    main_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    section?: SectionOrderByRelationAggregateInput
    rating?: RatingOrderByRelationAggregateInput
    enrolledStudents?: EnrolledStudentsOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    owner?: StringFilter<"Course"> | string
    ownerName?: StringNullableFilter<"Course"> | string | null
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    main_image?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    section?: SectionListRelationFilter
    rating?: RatingListRelationFilter
    enrolledStudents?: EnrolledStudentsListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    main_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    owner?: StringWithAggregatesFilter<"Course"> | string
    ownerName?: StringNullableWithAggregatesFilter<"Course"> | string | null
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    price?: FloatWithAggregatesFilter<"Course"> | number
    main_image?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionName?: StringFilter<"Section"> | string
    courseId?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    videoSection?: VideoSectionListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    sectionName?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    videoSection?: VideoSectionOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    sectionName?: StringFilter<"Section"> | string
    courseId?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    videoSection?: VideoSectionListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    sectionName?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    sectionName?: StringWithAggregatesFilter<"Section"> | string
    courseId?: StringWithAggregatesFilter<"Section"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
  }

  export type VideoSectionWhereInput = {
    AND?: VideoSectionWhereInput | VideoSectionWhereInput[]
    OR?: VideoSectionWhereInput[]
    NOT?: VideoSectionWhereInput | VideoSectionWhereInput[]
    id?: StringFilter<"VideoSection"> | string
    video_title?: StringFilter<"VideoSection"> | string
    video_url?: StringFilter<"VideoSection"> | string
    video_public_id?: StringFilter<"VideoSection"> | string
    video_thumbnailUrl?: StringFilter<"VideoSection"> | string
    video_duration?: FloatFilter<"VideoSection"> | number
    sectionId?: StringFilter<"VideoSection"> | string
    createdAt?: DateTimeFilter<"VideoSection"> | Date | string
    updatedAt?: DateTimeFilter<"VideoSection"> | Date | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type VideoSectionOrderByWithRelationInput = {
    id?: SortOrder
    video_title?: SortOrder
    video_url?: SortOrder
    video_public_id?: SortOrder
    video_thumbnailUrl?: SortOrder
    video_duration?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    section?: SectionOrderByWithRelationInput
  }

  export type VideoSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoSectionWhereInput | VideoSectionWhereInput[]
    OR?: VideoSectionWhereInput[]
    NOT?: VideoSectionWhereInput | VideoSectionWhereInput[]
    video_title?: StringFilter<"VideoSection"> | string
    video_url?: StringFilter<"VideoSection"> | string
    video_public_id?: StringFilter<"VideoSection"> | string
    video_thumbnailUrl?: StringFilter<"VideoSection"> | string
    video_duration?: FloatFilter<"VideoSection"> | number
    sectionId?: StringFilter<"VideoSection"> | string
    createdAt?: DateTimeFilter<"VideoSection"> | Date | string
    updatedAt?: DateTimeFilter<"VideoSection"> | Date | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id">

  export type VideoSectionOrderByWithAggregationInput = {
    id?: SortOrder
    video_title?: SortOrder
    video_url?: SortOrder
    video_public_id?: SortOrder
    video_thumbnailUrl?: SortOrder
    video_duration?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoSectionCountOrderByAggregateInput
    _avg?: VideoSectionAvgOrderByAggregateInput
    _max?: VideoSectionMaxOrderByAggregateInput
    _min?: VideoSectionMinOrderByAggregateInput
    _sum?: VideoSectionSumOrderByAggregateInput
  }

  export type VideoSectionScalarWhereWithAggregatesInput = {
    AND?: VideoSectionScalarWhereWithAggregatesInput | VideoSectionScalarWhereWithAggregatesInput[]
    OR?: VideoSectionScalarWhereWithAggregatesInput[]
    NOT?: VideoSectionScalarWhereWithAggregatesInput | VideoSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoSection"> | string
    video_title?: StringWithAggregatesFilter<"VideoSection"> | string
    video_url?: StringWithAggregatesFilter<"VideoSection"> | string
    video_public_id?: StringWithAggregatesFilter<"VideoSection"> | string
    video_thumbnailUrl?: StringWithAggregatesFilter<"VideoSection"> | string
    video_duration?: FloatWithAggregatesFilter<"VideoSection"> | number
    sectionId?: StringWithAggregatesFilter<"VideoSection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VideoSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoSection"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    value?: IntFilter<"Rating"> | number
    courseId?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    value?: IntFilter<"Rating"> | number
    courseId?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    value?: IntWithAggregatesFilter<"Rating"> | number
    courseId?: StringWithAggregatesFilter<"Rating"> | string
    userId?: StringWithAggregatesFilter<"Rating"> | string
  }

  export type EnrolledStudentsWhereInput = {
    AND?: EnrolledStudentsWhereInput | EnrolledStudentsWhereInput[]
    OR?: EnrolledStudentsWhereInput[]
    NOT?: EnrolledStudentsWhereInput | EnrolledStudentsWhereInput[]
    id?: StringFilter<"EnrolledStudents"> | string
    order_id?: StringFilter<"EnrolledStudents"> | string
    amount?: IntFilter<"EnrolledStudents"> | number
    currency?: StringFilter<"EnrolledStudents"> | string
    payment_status?: Enumpayment_statusFilter<"EnrolledStudents"> | $Enums.payment_status
    studentId?: StringFilter<"EnrolledStudents"> | string
    email?: StringFilter<"EnrolledStudents"> | string
    contact?: StringFilter<"EnrolledStudents"> | string
    invoice_name?: StringFilter<"EnrolledStudents"> | string
    created_at?: StringFilter<"EnrolledStudents"> | string
    courseId?: StringFilter<"EnrolledStudents"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    courseProgress?: XOR<CourseProgressNullableScalarRelationFilter, CourseProgressWhereInput> | null
  }

  export type EnrolledStudentsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    studentId?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    created_at?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    courseProgress?: CourseProgressOrderByWithRelationInput
  }

  export type EnrolledStudentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_id?: string
    AND?: EnrolledStudentsWhereInput | EnrolledStudentsWhereInput[]
    OR?: EnrolledStudentsWhereInput[]
    NOT?: EnrolledStudentsWhereInput | EnrolledStudentsWhereInput[]
    amount?: IntFilter<"EnrolledStudents"> | number
    currency?: StringFilter<"EnrolledStudents"> | string
    payment_status?: Enumpayment_statusFilter<"EnrolledStudents"> | $Enums.payment_status
    studentId?: StringFilter<"EnrolledStudents"> | string
    email?: StringFilter<"EnrolledStudents"> | string
    contact?: StringFilter<"EnrolledStudents"> | string
    invoice_name?: StringFilter<"EnrolledStudents"> | string
    created_at?: StringFilter<"EnrolledStudents"> | string
    courseId?: StringFilter<"EnrolledStudents"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    courseProgress?: XOR<CourseProgressNullableScalarRelationFilter, CourseProgressWhereInput> | null
  }, "id" | "order_id">

  export type EnrolledStudentsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    studentId?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    created_at?: SortOrder
    courseId?: SortOrder
    _count?: EnrolledStudentsCountOrderByAggregateInput
    _avg?: EnrolledStudentsAvgOrderByAggregateInput
    _max?: EnrolledStudentsMaxOrderByAggregateInput
    _min?: EnrolledStudentsMinOrderByAggregateInput
    _sum?: EnrolledStudentsSumOrderByAggregateInput
  }

  export type EnrolledStudentsScalarWhereWithAggregatesInput = {
    AND?: EnrolledStudentsScalarWhereWithAggregatesInput | EnrolledStudentsScalarWhereWithAggregatesInput[]
    OR?: EnrolledStudentsScalarWhereWithAggregatesInput[]
    NOT?: EnrolledStudentsScalarWhereWithAggregatesInput | EnrolledStudentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    order_id?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    amount?: IntWithAggregatesFilter<"EnrolledStudents"> | number
    currency?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    payment_status?: Enumpayment_statusWithAggregatesFilter<"EnrolledStudents"> | $Enums.payment_status
    studentId?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    email?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    contact?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    invoice_name?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    created_at?: StringWithAggregatesFilter<"EnrolledStudents"> | string
    courseId?: StringWithAggregatesFilter<"EnrolledStudents"> | string
  }

  export type CourseProgressWhereInput = {
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    id?: StringFilter<"CourseProgress"> | string
    enrolledStudentId?: StringFilter<"CourseProgress"> | string
    courseId?: StringFilter<"CourseProgress"> | string
    studentId?: StringFilter<"CourseProgress"> | string
    completionPercentage?: FloatFilter<"CourseProgress"> | number
    isCompleted?: BoolFilter<"CourseProgress"> | boolean
    enrolledStudent?: XOR<EnrolledStudentsScalarRelationFilter, EnrolledStudentsWhereInput>
    sectionProgress?: SectionProgressListRelationFilter
  }

  export type CourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
    enrolledStudent?: EnrolledStudentsOrderByWithRelationInput
    sectionProgress?: SectionProgressOrderByRelationAggregateInput
  }

  export type CourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    enrolledStudentId?: string
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    courseId?: StringFilter<"CourseProgress"> | string
    studentId?: StringFilter<"CourseProgress"> | string
    completionPercentage?: FloatFilter<"CourseProgress"> | number
    isCompleted?: BoolFilter<"CourseProgress"> | boolean
    enrolledStudent?: XOR<EnrolledStudentsScalarRelationFilter, EnrolledStudentsWhereInput>
    sectionProgress?: SectionProgressListRelationFilter
  }, "id" | "enrolledStudentId">

  export type CourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
    _count?: CourseProgressCountOrderByAggregateInput
    _avg?: CourseProgressAvgOrderByAggregateInput
    _max?: CourseProgressMaxOrderByAggregateInput
    _min?: CourseProgressMinOrderByAggregateInput
    _sum?: CourseProgressSumOrderByAggregateInput
  }

  export type CourseProgressScalarWhereWithAggregatesInput = {
    AND?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    OR?: CourseProgressScalarWhereWithAggregatesInput[]
    NOT?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseProgress"> | string
    enrolledStudentId?: StringWithAggregatesFilter<"CourseProgress"> | string
    courseId?: StringWithAggregatesFilter<"CourseProgress"> | string
    studentId?: StringWithAggregatesFilter<"CourseProgress"> | string
    completionPercentage?: FloatWithAggregatesFilter<"CourseProgress"> | number
    isCompleted?: BoolWithAggregatesFilter<"CourseProgress"> | boolean
  }

  export type SectionProgressWhereInput = {
    AND?: SectionProgressWhereInput | SectionProgressWhereInput[]
    OR?: SectionProgressWhereInput[]
    NOT?: SectionProgressWhereInput | SectionProgressWhereInput[]
    id?: StringFilter<"SectionProgress"> | string
    courseProgressId?: StringFilter<"SectionProgress"> | string
    sectionId?: StringFilter<"SectionProgress"> | string
    completionPercentage?: FloatFilter<"SectionProgress"> | number
    isCompleted?: BoolFilter<"SectionProgress"> | boolean
    courseProgress?: XOR<CourseProgressScalarRelationFilter, CourseProgressWhereInput>
    videoProgress?: VideoProgressListRelationFilter
  }

  export type SectionProgressOrderByWithRelationInput = {
    id?: SortOrder
    courseProgressId?: SortOrder
    sectionId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
    courseProgress?: CourseProgressOrderByWithRelationInput
    videoProgress?: VideoProgressOrderByRelationAggregateInput
  }

  export type SectionProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionProgressWhereInput | SectionProgressWhereInput[]
    OR?: SectionProgressWhereInput[]
    NOT?: SectionProgressWhereInput | SectionProgressWhereInput[]
    courseProgressId?: StringFilter<"SectionProgress"> | string
    sectionId?: StringFilter<"SectionProgress"> | string
    completionPercentage?: FloatFilter<"SectionProgress"> | number
    isCompleted?: BoolFilter<"SectionProgress"> | boolean
    courseProgress?: XOR<CourseProgressScalarRelationFilter, CourseProgressWhereInput>
    videoProgress?: VideoProgressListRelationFilter
  }, "id">

  export type SectionProgressOrderByWithAggregationInput = {
    id?: SortOrder
    courseProgressId?: SortOrder
    sectionId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
    _count?: SectionProgressCountOrderByAggregateInput
    _avg?: SectionProgressAvgOrderByAggregateInput
    _max?: SectionProgressMaxOrderByAggregateInput
    _min?: SectionProgressMinOrderByAggregateInput
    _sum?: SectionProgressSumOrderByAggregateInput
  }

  export type SectionProgressScalarWhereWithAggregatesInput = {
    AND?: SectionProgressScalarWhereWithAggregatesInput | SectionProgressScalarWhereWithAggregatesInput[]
    OR?: SectionProgressScalarWhereWithAggregatesInput[]
    NOT?: SectionProgressScalarWhereWithAggregatesInput | SectionProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SectionProgress"> | string
    courseProgressId?: StringWithAggregatesFilter<"SectionProgress"> | string
    sectionId?: StringWithAggregatesFilter<"SectionProgress"> | string
    completionPercentage?: FloatWithAggregatesFilter<"SectionProgress"> | number
    isCompleted?: BoolWithAggregatesFilter<"SectionProgress"> | boolean
  }

  export type VideoProgressWhereInput = {
    AND?: VideoProgressWhereInput | VideoProgressWhereInput[]
    OR?: VideoProgressWhereInput[]
    NOT?: VideoProgressWhereInput | VideoProgressWhereInput[]
    id?: StringFilter<"VideoProgress"> | string
    sectionProgressId?: StringFilter<"VideoProgress"> | string
    videoSectionId?: StringFilter<"VideoProgress"> | string
    video_duration?: FloatFilter<"VideoProgress"> | number
    userId?: StringFilter<"VideoProgress"> | string
    watchedSeconds?: FloatFilter<"VideoProgress"> | number
    completionPercentage?: FloatFilter<"VideoProgress"> | number
    isCompleted?: BoolFilter<"VideoProgress"> | boolean
    sectionProgress?: XOR<SectionProgressScalarRelationFilter, SectionProgressWhereInput>
  }

  export type VideoProgressOrderByWithRelationInput = {
    id?: SortOrder
    sectionProgressId?: SortOrder
    videoSectionId?: SortOrder
    video_duration?: SortOrder
    userId?: SortOrder
    watchedSeconds?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
    sectionProgress?: SectionProgressOrderByWithRelationInput
  }

  export type VideoProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoProgressWhereInput | VideoProgressWhereInput[]
    OR?: VideoProgressWhereInput[]
    NOT?: VideoProgressWhereInput | VideoProgressWhereInput[]
    sectionProgressId?: StringFilter<"VideoProgress"> | string
    videoSectionId?: StringFilter<"VideoProgress"> | string
    video_duration?: FloatFilter<"VideoProgress"> | number
    userId?: StringFilter<"VideoProgress"> | string
    watchedSeconds?: FloatFilter<"VideoProgress"> | number
    completionPercentage?: FloatFilter<"VideoProgress"> | number
    isCompleted?: BoolFilter<"VideoProgress"> | boolean
    sectionProgress?: XOR<SectionProgressScalarRelationFilter, SectionProgressWhereInput>
  }, "id">

  export type VideoProgressOrderByWithAggregationInput = {
    id?: SortOrder
    sectionProgressId?: SortOrder
    videoSectionId?: SortOrder
    video_duration?: SortOrder
    userId?: SortOrder
    watchedSeconds?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
    _count?: VideoProgressCountOrderByAggregateInput
    _avg?: VideoProgressAvgOrderByAggregateInput
    _max?: VideoProgressMaxOrderByAggregateInput
    _min?: VideoProgressMinOrderByAggregateInput
    _sum?: VideoProgressSumOrderByAggregateInput
  }

  export type VideoProgressScalarWhereWithAggregatesInput = {
    AND?: VideoProgressScalarWhereWithAggregatesInput | VideoProgressScalarWhereWithAggregatesInput[]
    OR?: VideoProgressScalarWhereWithAggregatesInput[]
    NOT?: VideoProgressScalarWhereWithAggregatesInput | VideoProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoProgress"> | string
    sectionProgressId?: StringWithAggregatesFilter<"VideoProgress"> | string
    videoSectionId?: StringWithAggregatesFilter<"VideoProgress"> | string
    video_duration?: FloatWithAggregatesFilter<"VideoProgress"> | number
    userId?: StringWithAggregatesFilter<"VideoProgress"> | string
    watchedSeconds?: FloatWithAggregatesFilter<"VideoProgress"> | number
    completionPercentage?: FloatWithAggregatesFilter<"VideoProgress"> | number
    isCompleted?: BoolWithAggregatesFilter<"VideoProgress"> | boolean
  }

  export type FilterPresetWhereInput = {
    AND?: FilterPresetWhereInput | FilterPresetWhereInput[]
    OR?: FilterPresetWhereInput[]
    NOT?: FilterPresetWhereInput | FilterPresetWhereInput[]
    id?: StringFilter<"FilterPreset"> | string
    userId?: StringFilter<"FilterPreset"> | string
    SavedFilterData?: SavedFilterDataListRelationFilter
  }

  export type FilterPresetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    SavedFilterData?: SavedFilterDataOrderByRelationAggregateInput
  }

  export type FilterPresetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FilterPresetWhereInput | FilterPresetWhereInput[]
    OR?: FilterPresetWhereInput[]
    NOT?: FilterPresetWhereInput | FilterPresetWhereInput[]
    SavedFilterData?: SavedFilterDataListRelationFilter
  }, "id" | "userId">

  export type FilterPresetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: FilterPresetCountOrderByAggregateInput
    _max?: FilterPresetMaxOrderByAggregateInput
    _min?: FilterPresetMinOrderByAggregateInput
  }

  export type FilterPresetScalarWhereWithAggregatesInput = {
    AND?: FilterPresetScalarWhereWithAggregatesInput | FilterPresetScalarWhereWithAggregatesInput[]
    OR?: FilterPresetScalarWhereWithAggregatesInput[]
    NOT?: FilterPresetScalarWhereWithAggregatesInput | FilterPresetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilterPreset"> | string
    userId?: StringWithAggregatesFilter<"FilterPreset"> | string
  }

  export type SavedFilterDataWhereInput = {
    AND?: SavedFilterDataWhereInput | SavedFilterDataWhereInput[]
    OR?: SavedFilterDataWhereInput[]
    NOT?: SavedFilterDataWhereInput | SavedFilterDataWhereInput[]
    id?: StringFilter<"SavedFilterData"> | string
    name?: StringFilter<"SavedFilterData"> | string
    selectedRating?: StringNullableListFilter<"SavedFilterData">
    priceRange?: IntNullableListFilter<"SavedFilterData">
    FilterPresetId?: StringFilter<"SavedFilterData"> | string
    FilterPreset?: XOR<FilterPresetScalarRelationFilter, FilterPresetWhereInput>
  }

  export type SavedFilterDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    selectedRating?: SortOrder
    priceRange?: SortOrder
    FilterPresetId?: SortOrder
    FilterPreset?: FilterPresetOrderByWithRelationInput
  }

  export type SavedFilterDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SavedFilterDataWhereInput | SavedFilterDataWhereInput[]
    OR?: SavedFilterDataWhereInput[]
    NOT?: SavedFilterDataWhereInput | SavedFilterDataWhereInput[]
    selectedRating?: StringNullableListFilter<"SavedFilterData">
    priceRange?: IntNullableListFilter<"SavedFilterData">
    FilterPresetId?: StringFilter<"SavedFilterData"> | string
    FilterPreset?: XOR<FilterPresetScalarRelationFilter, FilterPresetWhereInput>
  }, "id" | "name">

  export type SavedFilterDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    selectedRating?: SortOrder
    priceRange?: SortOrder
    FilterPresetId?: SortOrder
    _count?: SavedFilterDataCountOrderByAggregateInput
    _avg?: SavedFilterDataAvgOrderByAggregateInput
    _max?: SavedFilterDataMaxOrderByAggregateInput
    _min?: SavedFilterDataMinOrderByAggregateInput
    _sum?: SavedFilterDataSumOrderByAggregateInput
  }

  export type SavedFilterDataScalarWhereWithAggregatesInput = {
    AND?: SavedFilterDataScalarWhereWithAggregatesInput | SavedFilterDataScalarWhereWithAggregatesInput[]
    OR?: SavedFilterDataScalarWhereWithAggregatesInput[]
    NOT?: SavedFilterDataScalarWhereWithAggregatesInput | SavedFilterDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedFilterData"> | string
    name?: StringWithAggregatesFilter<"SavedFilterData"> | string
    selectedRating?: StringNullableListFilter<"SavedFilterData">
    priceRange?: IntNullableListFilter<"SavedFilterData">
    FilterPresetId?: StringWithAggregatesFilter<"SavedFilterData"> | string
  }

  export type CourseCreateInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: SectionCreateNestedManyWithoutCourseInput
    rating?: RatingCreateNestedManyWithoutCourseInput
    enrolledStudents?: EnrolledStudentsCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: SectionUncheckedCreateNestedManyWithoutCourseInput
    rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
    enrolledStudents?: EnrolledStudentsUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateManyWithoutCourseNestedInput
    rating?: RatingUpdateManyWithoutCourseNestedInput
    enrolledStudents?: EnrolledStudentsUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
    enrolledStudents?: EnrolledStudentsUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSectionInput
    videoSection?: VideoSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    sectionName: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoSection?: VideoSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSectionNestedInput
    videoSection?: VideoSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoSection?: VideoSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    sectionName: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSectionCreateInput = {
    id?: string
    video_title: string
    video_url: string
    video_public_id: string
    video_thumbnailUrl: string
    video_duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutVideoSectionInput
  }

  export type VideoSectionUncheckedCreateInput = {
    id?: string
    video_title: string
    video_url: string
    video_public_id: string
    video_thumbnailUrl: string
    video_duration: number
    sectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    video_public_id?: StringFieldUpdateOperationsInput | string
    video_thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutVideoSectionNestedInput
  }

  export type VideoSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    video_public_id?: StringFieldUpdateOperationsInput | string
    video_thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSectionCreateManyInput = {
    id?: string
    video_title: string
    video_url: string
    video_public_id: string
    video_thumbnailUrl: string
    video_duration: number
    sectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    video_public_id?: StringFieldUpdateOperationsInput | string
    video_thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    video_public_id?: StringFieldUpdateOperationsInput | string
    video_thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    id?: string
    value: number
    userId: string
    course: CourseCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    value: number
    courseId: string
    userId: string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingCreateManyInput = {
    id?: string
    value: number
    courseId: string
    userId: string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledStudentsCreateInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    course: CourseCreateNestedOneWithoutEnrolledStudentsInput
    courseProgress?: CourseProgressCreateNestedOneWithoutEnrolledStudentInput
  }

  export type EnrolledStudentsUncheckedCreateInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    courseId: string
    courseProgress?: CourseProgressUncheckedCreateNestedOneWithoutEnrolledStudentInput
  }

  export type EnrolledStudentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutEnrolledStudentsNestedInput
    courseProgress?: CourseProgressUpdateOneWithoutEnrolledStudentNestedInput
  }

  export type EnrolledStudentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    courseProgress?: CourseProgressUncheckedUpdateOneWithoutEnrolledStudentNestedInput
  }

  export type EnrolledStudentsCreateManyInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    courseId: string
  }

  export type EnrolledStudentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledStudentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseProgressCreateInput = {
    id?: string
    courseId: string
    studentId: string
    completionPercentage?: number
    isCompleted?: boolean
    enrolledStudent: EnrolledStudentsCreateNestedOneWithoutCourseProgressInput
    sectionProgress?: SectionProgressCreateNestedManyWithoutCourseProgressInput
  }

  export type CourseProgressUncheckedCreateInput = {
    id?: string
    enrolledStudentId: string
    courseId: string
    studentId: string
    completionPercentage?: number
    isCompleted?: boolean
    sectionProgress?: SectionProgressUncheckedCreateNestedManyWithoutCourseProgressInput
  }

  export type CourseProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    enrolledStudent?: EnrolledStudentsUpdateOneRequiredWithoutCourseProgressNestedInput
    sectionProgress?: SectionProgressUpdateManyWithoutCourseProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    sectionProgress?: SectionProgressUncheckedUpdateManyWithoutCourseProgressNestedInput
  }

  export type CourseProgressCreateManyInput = {
    id?: string
    enrolledStudentId: string
    courseId: string
    studentId: string
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type CourseProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SectionProgressCreateInput = {
    id?: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
    courseProgress: CourseProgressCreateNestedOneWithoutSectionProgressInput
    videoProgress?: VideoProgressCreateNestedManyWithoutSectionProgressInput
  }

  export type SectionProgressUncheckedCreateInput = {
    id?: string
    courseProgressId: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
    videoProgress?: VideoProgressUncheckedCreateNestedManyWithoutSectionProgressInput
  }

  export type SectionProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseProgress?: CourseProgressUpdateOneRequiredWithoutSectionProgressNestedInput
    videoProgress?: VideoProgressUpdateManyWithoutSectionProgressNestedInput
  }

  export type SectionProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseProgressId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    videoProgress?: VideoProgressUncheckedUpdateManyWithoutSectionProgressNestedInput
  }

  export type SectionProgressCreateManyInput = {
    id?: string
    courseProgressId: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type SectionProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SectionProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseProgressId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressCreateInput = {
    id?: string
    videoSectionId: string
    video_duration: number
    userId: string
    watchedSeconds?: number
    completionPercentage?: number
    isCompleted?: boolean
    sectionProgress: SectionProgressCreateNestedOneWithoutVideoProgressInput
  }

  export type VideoProgressUncheckedCreateInput = {
    id?: string
    sectionProgressId: string
    videoSectionId: string
    video_duration: number
    userId: string
    watchedSeconds?: number
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type VideoProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoSectionId?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedSeconds?: FloatFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    sectionProgress?: SectionProgressUpdateOneRequiredWithoutVideoProgressNestedInput
  }

  export type VideoProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionProgressId?: StringFieldUpdateOperationsInput | string
    videoSectionId?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedSeconds?: FloatFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressCreateManyInput = {
    id?: string
    sectionProgressId: string
    videoSectionId: string
    video_duration: number
    userId: string
    watchedSeconds?: number
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type VideoProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoSectionId?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedSeconds?: FloatFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionProgressId?: StringFieldUpdateOperationsInput | string
    videoSectionId?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedSeconds?: FloatFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FilterPresetCreateInput = {
    id?: string
    userId: string
    SavedFilterData?: SavedFilterDataCreateNestedManyWithoutFilterPresetInput
  }

  export type FilterPresetUncheckedCreateInput = {
    id?: string
    userId: string
    SavedFilterData?: SavedFilterDataUncheckedCreateNestedManyWithoutFilterPresetInput
  }

  export type FilterPresetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    SavedFilterData?: SavedFilterDataUpdateManyWithoutFilterPresetNestedInput
  }

  export type FilterPresetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    SavedFilterData?: SavedFilterDataUncheckedUpdateManyWithoutFilterPresetNestedInput
  }

  export type FilterPresetCreateManyInput = {
    id?: string
    userId: string
  }

  export type FilterPresetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterPresetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedFilterDataCreateInput = {
    id?: string
    name: string
    selectedRating?: SavedFilterDataCreateselectedRatingInput | string[]
    priceRange?: SavedFilterDataCreatepriceRangeInput | number[]
    FilterPreset: FilterPresetCreateNestedOneWithoutSavedFilterDataInput
  }

  export type SavedFilterDataUncheckedCreateInput = {
    id?: string
    name: string
    selectedRating?: SavedFilterDataCreateselectedRatingInput | string[]
    priceRange?: SavedFilterDataCreatepriceRangeInput | number[]
    FilterPresetId: string
  }

  export type SavedFilterDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selectedRating?: SavedFilterDataUpdateselectedRatingInput | string[]
    priceRange?: SavedFilterDataUpdatepriceRangeInput | number[]
    FilterPreset?: FilterPresetUpdateOneRequiredWithoutSavedFilterDataNestedInput
  }

  export type SavedFilterDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selectedRating?: SavedFilterDataUpdateselectedRatingInput | string[]
    priceRange?: SavedFilterDataUpdatepriceRangeInput | number[]
    FilterPresetId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedFilterDataCreateManyInput = {
    id?: string
    name: string
    selectedRating?: SavedFilterDataCreateselectedRatingInput | string[]
    priceRange?: SavedFilterDataCreatepriceRangeInput | number[]
    FilterPresetId: string
  }

  export type SavedFilterDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selectedRating?: SavedFilterDataUpdateselectedRatingInput | string[]
    priceRange?: SavedFilterDataUpdatepriceRangeInput | number[]
  }

  export type SavedFilterDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selectedRating?: SavedFilterDataUpdateselectedRatingInput | string[]
    priceRange?: SavedFilterDataUpdatepriceRangeInput | number[]
    FilterPresetId?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type EnrolledStudentsListRelationFilter = {
    every?: EnrolledStudentsWhereInput
    some?: EnrolledStudentsWhereInput
    none?: EnrolledStudentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrolledStudentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    ownerName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    main_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    ownerName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    main_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    ownerName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    main_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type VideoSectionListRelationFilter = {
    every?: VideoSectionWhereInput
    some?: VideoSectionWhereInput
    none?: VideoSectionWhereInput
  }

  export type VideoSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    sectionName?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionName?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    sectionName?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type VideoSectionCountOrderByAggregateInput = {
    id?: SortOrder
    video_title?: SortOrder
    video_url?: SortOrder
    video_public_id?: SortOrder
    video_thumbnailUrl?: SortOrder
    video_duration?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSectionAvgOrderByAggregateInput = {
    video_duration?: SortOrder
  }

  export type VideoSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    video_title?: SortOrder
    video_url?: SortOrder
    video_public_id?: SortOrder
    video_thumbnailUrl?: SortOrder
    video_duration?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSectionMinOrderByAggregateInput = {
    id?: SortOrder
    video_title?: SortOrder
    video_url?: SortOrder
    video_public_id?: SortOrder
    video_thumbnailUrl?: SortOrder
    video_duration?: SortOrder
    sectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSectionSumOrderByAggregateInput = {
    video_duration?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type CourseProgressNullableScalarRelationFilter = {
    is?: CourseProgressWhereInput | null
    isNot?: CourseProgressWhereInput | null
  }

  export type EnrolledStudentsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    studentId?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    created_at?: SortOrder
    courseId?: SortOrder
  }

  export type EnrolledStudentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnrolledStudentsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    studentId?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    created_at?: SortOrder
    courseId?: SortOrder
  }

  export type EnrolledStudentsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_status?: SortOrder
    studentId?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    invoice_name?: SortOrder
    created_at?: SortOrder
    courseId?: SortOrder
  }

  export type EnrolledStudentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Enumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnrolledStudentsScalarRelationFilter = {
    is?: EnrolledStudentsWhereInput
    isNot?: EnrolledStudentsWhereInput
  }

  export type SectionProgressListRelationFilter = {
    every?: SectionProgressWhereInput
    some?: SectionProgressWhereInput
    none?: SectionProgressWhereInput
  }

  export type SectionProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type CourseProgressAvgOrderByAggregateInput = {
    completionPercentage?: SortOrder
  }

  export type CourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type CourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    enrolledStudentId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type CourseProgressSumOrderByAggregateInput = {
    completionPercentage?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CourseProgressScalarRelationFilter = {
    is?: CourseProgressWhereInput
    isNot?: CourseProgressWhereInput
  }

  export type VideoProgressListRelationFilter = {
    every?: VideoProgressWhereInput
    some?: VideoProgressWhereInput
    none?: VideoProgressWhereInput
  }

  export type VideoProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionProgressCountOrderByAggregateInput = {
    id?: SortOrder
    courseProgressId?: SortOrder
    sectionId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type SectionProgressAvgOrderByAggregateInput = {
    completionPercentage?: SortOrder
  }

  export type SectionProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    courseProgressId?: SortOrder
    sectionId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type SectionProgressMinOrderByAggregateInput = {
    id?: SortOrder
    courseProgressId?: SortOrder
    sectionId?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type SectionProgressSumOrderByAggregateInput = {
    completionPercentage?: SortOrder
  }

  export type SectionProgressScalarRelationFilter = {
    is?: SectionProgressWhereInput
    isNot?: SectionProgressWhereInput
  }

  export type VideoProgressCountOrderByAggregateInput = {
    id?: SortOrder
    sectionProgressId?: SortOrder
    videoSectionId?: SortOrder
    video_duration?: SortOrder
    userId?: SortOrder
    watchedSeconds?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type VideoProgressAvgOrderByAggregateInput = {
    video_duration?: SortOrder
    watchedSeconds?: SortOrder
    completionPercentage?: SortOrder
  }

  export type VideoProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionProgressId?: SortOrder
    videoSectionId?: SortOrder
    video_duration?: SortOrder
    userId?: SortOrder
    watchedSeconds?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type VideoProgressMinOrderByAggregateInput = {
    id?: SortOrder
    sectionProgressId?: SortOrder
    videoSectionId?: SortOrder
    video_duration?: SortOrder
    userId?: SortOrder
    watchedSeconds?: SortOrder
    completionPercentage?: SortOrder
    isCompleted?: SortOrder
  }

  export type VideoProgressSumOrderByAggregateInput = {
    video_duration?: SortOrder
    watchedSeconds?: SortOrder
    completionPercentage?: SortOrder
  }

  export type SavedFilterDataListRelationFilter = {
    every?: SavedFilterDataWhereInput
    some?: SavedFilterDataWhereInput
    none?: SavedFilterDataWhereInput
  }

  export type SavedFilterDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilterPresetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FilterPresetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FilterPresetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FilterPresetScalarRelationFilter = {
    is?: FilterPresetWhereInput
    isNot?: FilterPresetWhereInput
  }

  export type SavedFilterDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    selectedRating?: SortOrder
    priceRange?: SortOrder
    FilterPresetId?: SortOrder
  }

  export type SavedFilterDataAvgOrderByAggregateInput = {
    priceRange?: SortOrder
  }

  export type SavedFilterDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    FilterPresetId?: SortOrder
  }

  export type SavedFilterDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    FilterPresetId?: SortOrder
  }

  export type SavedFilterDataSumOrderByAggregateInput = {
    priceRange?: SortOrder
  }

  export type SectionCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type EnrolledStudentsCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrolledStudentsCreateWithoutCourseInput, EnrolledStudentsUncheckedCreateWithoutCourseInput> | EnrolledStudentsCreateWithoutCourseInput[] | EnrolledStudentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledStudentsCreateOrConnectWithoutCourseInput | EnrolledStudentsCreateOrConnectWithoutCourseInput[]
    createMany?: EnrolledStudentsCreateManyCourseInputEnvelope
    connect?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type EnrolledStudentsUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrolledStudentsCreateWithoutCourseInput, EnrolledStudentsUncheckedCreateWithoutCourseInput> | EnrolledStudentsCreateWithoutCourseInput[] | EnrolledStudentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledStudentsCreateOrConnectWithoutCourseInput | EnrolledStudentsCreateOrConnectWithoutCourseInput[]
    createMany?: EnrolledStudentsCreateManyCourseInputEnvelope
    connect?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SectionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutCourseInput | RatingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutCourseInput | RatingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutCourseInput | RatingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type EnrolledStudentsUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrolledStudentsCreateWithoutCourseInput, EnrolledStudentsUncheckedCreateWithoutCourseInput> | EnrolledStudentsCreateWithoutCourseInput[] | EnrolledStudentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledStudentsCreateOrConnectWithoutCourseInput | EnrolledStudentsCreateOrConnectWithoutCourseInput[]
    upsert?: EnrolledStudentsUpsertWithWhereUniqueWithoutCourseInput | EnrolledStudentsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrolledStudentsCreateManyCourseInputEnvelope
    set?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    disconnect?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    delete?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    connect?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    update?: EnrolledStudentsUpdateWithWhereUniqueWithoutCourseInput | EnrolledStudentsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrolledStudentsUpdateManyWithWhereWithoutCourseInput | EnrolledStudentsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrolledStudentsScalarWhereInput | EnrolledStudentsScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutCourseInput | RatingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutCourseInput | RatingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutCourseInput | RatingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type EnrolledStudentsUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrolledStudentsCreateWithoutCourseInput, EnrolledStudentsUncheckedCreateWithoutCourseInput> | EnrolledStudentsCreateWithoutCourseInput[] | EnrolledStudentsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledStudentsCreateOrConnectWithoutCourseInput | EnrolledStudentsCreateOrConnectWithoutCourseInput[]
    upsert?: EnrolledStudentsUpsertWithWhereUniqueWithoutCourseInput | EnrolledStudentsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrolledStudentsCreateManyCourseInputEnvelope
    set?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    disconnect?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    delete?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    connect?: EnrolledStudentsWhereUniqueInput | EnrolledStudentsWhereUniqueInput[]
    update?: EnrolledStudentsUpdateWithWhereUniqueWithoutCourseInput | EnrolledStudentsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrolledStudentsUpdateManyWithWhereWithoutCourseInput | EnrolledStudentsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrolledStudentsScalarWhereInput | EnrolledStudentsScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutSectionInput = {
    create?: XOR<CourseCreateWithoutSectionInput, CourseUncheckedCreateWithoutSectionInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionInput
    connect?: CourseWhereUniqueInput
  }

  export type VideoSectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<VideoSectionCreateWithoutSectionInput, VideoSectionUncheckedCreateWithoutSectionInput> | VideoSectionCreateWithoutSectionInput[] | VideoSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: VideoSectionCreateOrConnectWithoutSectionInput | VideoSectionCreateOrConnectWithoutSectionInput[]
    createMany?: VideoSectionCreateManySectionInputEnvelope
    connect?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
  }

  export type VideoSectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<VideoSectionCreateWithoutSectionInput, VideoSectionUncheckedCreateWithoutSectionInput> | VideoSectionCreateWithoutSectionInput[] | VideoSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: VideoSectionCreateOrConnectWithoutSectionInput | VideoSectionCreateOrConnectWithoutSectionInput[]
    createMany?: VideoSectionCreateManySectionInputEnvelope
    connect?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutSectionNestedInput = {
    create?: XOR<CourseCreateWithoutSectionInput, CourseUncheckedCreateWithoutSectionInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionInput
    upsert?: CourseUpsertWithoutSectionInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSectionInput, CourseUpdateWithoutSectionInput>, CourseUncheckedUpdateWithoutSectionInput>
  }

  export type VideoSectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<VideoSectionCreateWithoutSectionInput, VideoSectionUncheckedCreateWithoutSectionInput> | VideoSectionCreateWithoutSectionInput[] | VideoSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: VideoSectionCreateOrConnectWithoutSectionInput | VideoSectionCreateOrConnectWithoutSectionInput[]
    upsert?: VideoSectionUpsertWithWhereUniqueWithoutSectionInput | VideoSectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: VideoSectionCreateManySectionInputEnvelope
    set?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    disconnect?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    delete?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    connect?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    update?: VideoSectionUpdateWithWhereUniqueWithoutSectionInput | VideoSectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: VideoSectionUpdateManyWithWhereWithoutSectionInput | VideoSectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: VideoSectionScalarWhereInput | VideoSectionScalarWhereInput[]
  }

  export type VideoSectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<VideoSectionCreateWithoutSectionInput, VideoSectionUncheckedCreateWithoutSectionInput> | VideoSectionCreateWithoutSectionInput[] | VideoSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: VideoSectionCreateOrConnectWithoutSectionInput | VideoSectionCreateOrConnectWithoutSectionInput[]
    upsert?: VideoSectionUpsertWithWhereUniqueWithoutSectionInput | VideoSectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: VideoSectionCreateManySectionInputEnvelope
    set?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    disconnect?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    delete?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    connect?: VideoSectionWhereUniqueInput | VideoSectionWhereUniqueInput[]
    update?: VideoSectionUpdateWithWhereUniqueWithoutSectionInput | VideoSectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: VideoSectionUpdateManyWithWhereWithoutSectionInput | VideoSectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: VideoSectionScalarWhereInput | VideoSectionScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutVideoSectionInput = {
    create?: XOR<SectionCreateWithoutVideoSectionInput, SectionUncheckedCreateWithoutVideoSectionInput>
    connectOrCreate?: SectionCreateOrConnectWithoutVideoSectionInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutVideoSectionNestedInput = {
    create?: XOR<SectionCreateWithoutVideoSectionInput, SectionUncheckedCreateWithoutVideoSectionInput>
    connectOrCreate?: SectionCreateOrConnectWithoutVideoSectionInput
    upsert?: SectionUpsertWithoutVideoSectionInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutVideoSectionInput, SectionUpdateWithoutVideoSectionInput>, SectionUncheckedUpdateWithoutVideoSectionInput>
  }

  export type CourseCreateNestedOneWithoutRatingInput = {
    create?: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingInput
    connect?: CourseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingInput
    upsert?: CourseUpsertWithoutRatingInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRatingInput, CourseUpdateWithoutRatingInput>, CourseUncheckedUpdateWithoutRatingInput>
  }

  export type CourseCreateNestedOneWithoutEnrolledStudentsInput = {
    create?: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledStudentsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseProgressCreateNestedOneWithoutEnrolledStudentInput = {
    create?: XOR<CourseProgressCreateWithoutEnrolledStudentInput, CourseProgressUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutEnrolledStudentInput
    connect?: CourseProgressWhereUniqueInput
  }

  export type CourseProgressUncheckedCreateNestedOneWithoutEnrolledStudentInput = {
    create?: XOR<CourseProgressCreateWithoutEnrolledStudentInput, CourseProgressUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutEnrolledStudentInput
    connect?: CourseProgressWhereUniqueInput
  }

  export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status
  }

  export type CourseUpdateOneRequiredWithoutEnrolledStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledStudentsInput
    upsert?: CourseUpsertWithoutEnrolledStudentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrolledStudentsInput, CourseUpdateWithoutEnrolledStudentsInput>, CourseUncheckedUpdateWithoutEnrolledStudentsInput>
  }

  export type CourseProgressUpdateOneWithoutEnrolledStudentNestedInput = {
    create?: XOR<CourseProgressCreateWithoutEnrolledStudentInput, CourseProgressUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutEnrolledStudentInput
    upsert?: CourseProgressUpsertWithoutEnrolledStudentInput
    disconnect?: CourseProgressWhereInput | boolean
    delete?: CourseProgressWhereInput | boolean
    connect?: CourseProgressWhereUniqueInput
    update?: XOR<XOR<CourseProgressUpdateToOneWithWhereWithoutEnrolledStudentInput, CourseProgressUpdateWithoutEnrolledStudentInput>, CourseProgressUncheckedUpdateWithoutEnrolledStudentInput>
  }

  export type CourseProgressUncheckedUpdateOneWithoutEnrolledStudentNestedInput = {
    create?: XOR<CourseProgressCreateWithoutEnrolledStudentInput, CourseProgressUncheckedCreateWithoutEnrolledStudentInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutEnrolledStudentInput
    upsert?: CourseProgressUpsertWithoutEnrolledStudentInput
    disconnect?: CourseProgressWhereInput | boolean
    delete?: CourseProgressWhereInput | boolean
    connect?: CourseProgressWhereUniqueInput
    update?: XOR<XOR<CourseProgressUpdateToOneWithWhereWithoutEnrolledStudentInput, CourseProgressUpdateWithoutEnrolledStudentInput>, CourseProgressUncheckedUpdateWithoutEnrolledStudentInput>
  }

  export type EnrolledStudentsCreateNestedOneWithoutCourseProgressInput = {
    create?: XOR<EnrolledStudentsCreateWithoutCourseProgressInput, EnrolledStudentsUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: EnrolledStudentsCreateOrConnectWithoutCourseProgressInput
    connect?: EnrolledStudentsWhereUniqueInput
  }

  export type SectionProgressCreateNestedManyWithoutCourseProgressInput = {
    create?: XOR<SectionProgressCreateWithoutCourseProgressInput, SectionProgressUncheckedCreateWithoutCourseProgressInput> | SectionProgressCreateWithoutCourseProgressInput[] | SectionProgressUncheckedCreateWithoutCourseProgressInput[]
    connectOrCreate?: SectionProgressCreateOrConnectWithoutCourseProgressInput | SectionProgressCreateOrConnectWithoutCourseProgressInput[]
    createMany?: SectionProgressCreateManyCourseProgressInputEnvelope
    connect?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
  }

  export type SectionProgressUncheckedCreateNestedManyWithoutCourseProgressInput = {
    create?: XOR<SectionProgressCreateWithoutCourseProgressInput, SectionProgressUncheckedCreateWithoutCourseProgressInput> | SectionProgressCreateWithoutCourseProgressInput[] | SectionProgressUncheckedCreateWithoutCourseProgressInput[]
    connectOrCreate?: SectionProgressCreateOrConnectWithoutCourseProgressInput | SectionProgressCreateOrConnectWithoutCourseProgressInput[]
    createMany?: SectionProgressCreateManyCourseProgressInputEnvelope
    connect?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnrolledStudentsUpdateOneRequiredWithoutCourseProgressNestedInput = {
    create?: XOR<EnrolledStudentsCreateWithoutCourseProgressInput, EnrolledStudentsUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: EnrolledStudentsCreateOrConnectWithoutCourseProgressInput
    upsert?: EnrolledStudentsUpsertWithoutCourseProgressInput
    connect?: EnrolledStudentsWhereUniqueInput
    update?: XOR<XOR<EnrolledStudentsUpdateToOneWithWhereWithoutCourseProgressInput, EnrolledStudentsUpdateWithoutCourseProgressInput>, EnrolledStudentsUncheckedUpdateWithoutCourseProgressInput>
  }

  export type SectionProgressUpdateManyWithoutCourseProgressNestedInput = {
    create?: XOR<SectionProgressCreateWithoutCourseProgressInput, SectionProgressUncheckedCreateWithoutCourseProgressInput> | SectionProgressCreateWithoutCourseProgressInput[] | SectionProgressUncheckedCreateWithoutCourseProgressInput[]
    connectOrCreate?: SectionProgressCreateOrConnectWithoutCourseProgressInput | SectionProgressCreateOrConnectWithoutCourseProgressInput[]
    upsert?: SectionProgressUpsertWithWhereUniqueWithoutCourseProgressInput | SectionProgressUpsertWithWhereUniqueWithoutCourseProgressInput[]
    createMany?: SectionProgressCreateManyCourseProgressInputEnvelope
    set?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    disconnect?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    delete?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    connect?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    update?: SectionProgressUpdateWithWhereUniqueWithoutCourseProgressInput | SectionProgressUpdateWithWhereUniqueWithoutCourseProgressInput[]
    updateMany?: SectionProgressUpdateManyWithWhereWithoutCourseProgressInput | SectionProgressUpdateManyWithWhereWithoutCourseProgressInput[]
    deleteMany?: SectionProgressScalarWhereInput | SectionProgressScalarWhereInput[]
  }

  export type SectionProgressUncheckedUpdateManyWithoutCourseProgressNestedInput = {
    create?: XOR<SectionProgressCreateWithoutCourseProgressInput, SectionProgressUncheckedCreateWithoutCourseProgressInput> | SectionProgressCreateWithoutCourseProgressInput[] | SectionProgressUncheckedCreateWithoutCourseProgressInput[]
    connectOrCreate?: SectionProgressCreateOrConnectWithoutCourseProgressInput | SectionProgressCreateOrConnectWithoutCourseProgressInput[]
    upsert?: SectionProgressUpsertWithWhereUniqueWithoutCourseProgressInput | SectionProgressUpsertWithWhereUniqueWithoutCourseProgressInput[]
    createMany?: SectionProgressCreateManyCourseProgressInputEnvelope
    set?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    disconnect?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    delete?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    connect?: SectionProgressWhereUniqueInput | SectionProgressWhereUniqueInput[]
    update?: SectionProgressUpdateWithWhereUniqueWithoutCourseProgressInput | SectionProgressUpdateWithWhereUniqueWithoutCourseProgressInput[]
    updateMany?: SectionProgressUpdateManyWithWhereWithoutCourseProgressInput | SectionProgressUpdateManyWithWhereWithoutCourseProgressInput[]
    deleteMany?: SectionProgressScalarWhereInput | SectionProgressScalarWhereInput[]
  }

  export type CourseProgressCreateNestedOneWithoutSectionProgressInput = {
    create?: XOR<CourseProgressCreateWithoutSectionProgressInput, CourseProgressUncheckedCreateWithoutSectionProgressInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutSectionProgressInput
    connect?: CourseProgressWhereUniqueInput
  }

  export type VideoProgressCreateNestedManyWithoutSectionProgressInput = {
    create?: XOR<VideoProgressCreateWithoutSectionProgressInput, VideoProgressUncheckedCreateWithoutSectionProgressInput> | VideoProgressCreateWithoutSectionProgressInput[] | VideoProgressUncheckedCreateWithoutSectionProgressInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutSectionProgressInput | VideoProgressCreateOrConnectWithoutSectionProgressInput[]
    createMany?: VideoProgressCreateManySectionProgressInputEnvelope
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
  }

  export type VideoProgressUncheckedCreateNestedManyWithoutSectionProgressInput = {
    create?: XOR<VideoProgressCreateWithoutSectionProgressInput, VideoProgressUncheckedCreateWithoutSectionProgressInput> | VideoProgressCreateWithoutSectionProgressInput[] | VideoProgressUncheckedCreateWithoutSectionProgressInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutSectionProgressInput | VideoProgressCreateOrConnectWithoutSectionProgressInput[]
    createMany?: VideoProgressCreateManySectionProgressInputEnvelope
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
  }

  export type CourseProgressUpdateOneRequiredWithoutSectionProgressNestedInput = {
    create?: XOR<CourseProgressCreateWithoutSectionProgressInput, CourseProgressUncheckedCreateWithoutSectionProgressInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutSectionProgressInput
    upsert?: CourseProgressUpsertWithoutSectionProgressInput
    connect?: CourseProgressWhereUniqueInput
    update?: XOR<XOR<CourseProgressUpdateToOneWithWhereWithoutSectionProgressInput, CourseProgressUpdateWithoutSectionProgressInput>, CourseProgressUncheckedUpdateWithoutSectionProgressInput>
  }

  export type VideoProgressUpdateManyWithoutSectionProgressNestedInput = {
    create?: XOR<VideoProgressCreateWithoutSectionProgressInput, VideoProgressUncheckedCreateWithoutSectionProgressInput> | VideoProgressCreateWithoutSectionProgressInput[] | VideoProgressUncheckedCreateWithoutSectionProgressInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutSectionProgressInput | VideoProgressCreateOrConnectWithoutSectionProgressInput[]
    upsert?: VideoProgressUpsertWithWhereUniqueWithoutSectionProgressInput | VideoProgressUpsertWithWhereUniqueWithoutSectionProgressInput[]
    createMany?: VideoProgressCreateManySectionProgressInputEnvelope
    set?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    disconnect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    delete?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    update?: VideoProgressUpdateWithWhereUniqueWithoutSectionProgressInput | VideoProgressUpdateWithWhereUniqueWithoutSectionProgressInput[]
    updateMany?: VideoProgressUpdateManyWithWhereWithoutSectionProgressInput | VideoProgressUpdateManyWithWhereWithoutSectionProgressInput[]
    deleteMany?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
  }

  export type VideoProgressUncheckedUpdateManyWithoutSectionProgressNestedInput = {
    create?: XOR<VideoProgressCreateWithoutSectionProgressInput, VideoProgressUncheckedCreateWithoutSectionProgressInput> | VideoProgressCreateWithoutSectionProgressInput[] | VideoProgressUncheckedCreateWithoutSectionProgressInput[]
    connectOrCreate?: VideoProgressCreateOrConnectWithoutSectionProgressInput | VideoProgressCreateOrConnectWithoutSectionProgressInput[]
    upsert?: VideoProgressUpsertWithWhereUniqueWithoutSectionProgressInput | VideoProgressUpsertWithWhereUniqueWithoutSectionProgressInput[]
    createMany?: VideoProgressCreateManySectionProgressInputEnvelope
    set?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    disconnect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    delete?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    connect?: VideoProgressWhereUniqueInput | VideoProgressWhereUniqueInput[]
    update?: VideoProgressUpdateWithWhereUniqueWithoutSectionProgressInput | VideoProgressUpdateWithWhereUniqueWithoutSectionProgressInput[]
    updateMany?: VideoProgressUpdateManyWithWhereWithoutSectionProgressInput | VideoProgressUpdateManyWithWhereWithoutSectionProgressInput[]
    deleteMany?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
  }

  export type SectionProgressCreateNestedOneWithoutVideoProgressInput = {
    create?: XOR<SectionProgressCreateWithoutVideoProgressInput, SectionProgressUncheckedCreateWithoutVideoProgressInput>
    connectOrCreate?: SectionProgressCreateOrConnectWithoutVideoProgressInput
    connect?: SectionProgressWhereUniqueInput
  }

  export type SectionProgressUpdateOneRequiredWithoutVideoProgressNestedInput = {
    create?: XOR<SectionProgressCreateWithoutVideoProgressInput, SectionProgressUncheckedCreateWithoutVideoProgressInput>
    connectOrCreate?: SectionProgressCreateOrConnectWithoutVideoProgressInput
    upsert?: SectionProgressUpsertWithoutVideoProgressInput
    connect?: SectionProgressWhereUniqueInput
    update?: XOR<XOR<SectionProgressUpdateToOneWithWhereWithoutVideoProgressInput, SectionProgressUpdateWithoutVideoProgressInput>, SectionProgressUncheckedUpdateWithoutVideoProgressInput>
  }

  export type SavedFilterDataCreateNestedManyWithoutFilterPresetInput = {
    create?: XOR<SavedFilterDataCreateWithoutFilterPresetInput, SavedFilterDataUncheckedCreateWithoutFilterPresetInput> | SavedFilterDataCreateWithoutFilterPresetInput[] | SavedFilterDataUncheckedCreateWithoutFilterPresetInput[]
    connectOrCreate?: SavedFilterDataCreateOrConnectWithoutFilterPresetInput | SavedFilterDataCreateOrConnectWithoutFilterPresetInput[]
    createMany?: SavedFilterDataCreateManyFilterPresetInputEnvelope
    connect?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
  }

  export type SavedFilterDataUncheckedCreateNestedManyWithoutFilterPresetInput = {
    create?: XOR<SavedFilterDataCreateWithoutFilterPresetInput, SavedFilterDataUncheckedCreateWithoutFilterPresetInput> | SavedFilterDataCreateWithoutFilterPresetInput[] | SavedFilterDataUncheckedCreateWithoutFilterPresetInput[]
    connectOrCreate?: SavedFilterDataCreateOrConnectWithoutFilterPresetInput | SavedFilterDataCreateOrConnectWithoutFilterPresetInput[]
    createMany?: SavedFilterDataCreateManyFilterPresetInputEnvelope
    connect?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
  }

  export type SavedFilterDataUpdateManyWithoutFilterPresetNestedInput = {
    create?: XOR<SavedFilterDataCreateWithoutFilterPresetInput, SavedFilterDataUncheckedCreateWithoutFilterPresetInput> | SavedFilterDataCreateWithoutFilterPresetInput[] | SavedFilterDataUncheckedCreateWithoutFilterPresetInput[]
    connectOrCreate?: SavedFilterDataCreateOrConnectWithoutFilterPresetInput | SavedFilterDataCreateOrConnectWithoutFilterPresetInput[]
    upsert?: SavedFilterDataUpsertWithWhereUniqueWithoutFilterPresetInput | SavedFilterDataUpsertWithWhereUniqueWithoutFilterPresetInput[]
    createMany?: SavedFilterDataCreateManyFilterPresetInputEnvelope
    set?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    disconnect?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    delete?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    connect?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    update?: SavedFilterDataUpdateWithWhereUniqueWithoutFilterPresetInput | SavedFilterDataUpdateWithWhereUniqueWithoutFilterPresetInput[]
    updateMany?: SavedFilterDataUpdateManyWithWhereWithoutFilterPresetInput | SavedFilterDataUpdateManyWithWhereWithoutFilterPresetInput[]
    deleteMany?: SavedFilterDataScalarWhereInput | SavedFilterDataScalarWhereInput[]
  }

  export type SavedFilterDataUncheckedUpdateManyWithoutFilterPresetNestedInput = {
    create?: XOR<SavedFilterDataCreateWithoutFilterPresetInput, SavedFilterDataUncheckedCreateWithoutFilterPresetInput> | SavedFilterDataCreateWithoutFilterPresetInput[] | SavedFilterDataUncheckedCreateWithoutFilterPresetInput[]
    connectOrCreate?: SavedFilterDataCreateOrConnectWithoutFilterPresetInput | SavedFilterDataCreateOrConnectWithoutFilterPresetInput[]
    upsert?: SavedFilterDataUpsertWithWhereUniqueWithoutFilterPresetInput | SavedFilterDataUpsertWithWhereUniqueWithoutFilterPresetInput[]
    createMany?: SavedFilterDataCreateManyFilterPresetInputEnvelope
    set?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    disconnect?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    delete?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    connect?: SavedFilterDataWhereUniqueInput | SavedFilterDataWhereUniqueInput[]
    update?: SavedFilterDataUpdateWithWhereUniqueWithoutFilterPresetInput | SavedFilterDataUpdateWithWhereUniqueWithoutFilterPresetInput[]
    updateMany?: SavedFilterDataUpdateManyWithWhereWithoutFilterPresetInput | SavedFilterDataUpdateManyWithWhereWithoutFilterPresetInput[]
    deleteMany?: SavedFilterDataScalarWhereInput | SavedFilterDataScalarWhereInput[]
  }

  export type SavedFilterDataCreateselectedRatingInput = {
    set: string[]
  }

  export type SavedFilterDataCreatepriceRangeInput = {
    set: number[]
  }

  export type FilterPresetCreateNestedOneWithoutSavedFilterDataInput = {
    create?: XOR<FilterPresetCreateWithoutSavedFilterDataInput, FilterPresetUncheckedCreateWithoutSavedFilterDataInput>
    connectOrCreate?: FilterPresetCreateOrConnectWithoutSavedFilterDataInput
    connect?: FilterPresetWhereUniqueInput
  }

  export type SavedFilterDataUpdateselectedRatingInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SavedFilterDataUpdatepriceRangeInput = {
    set?: number[]
    push?: number | number[]
  }

  export type FilterPresetUpdateOneRequiredWithoutSavedFilterDataNestedInput = {
    create?: XOR<FilterPresetCreateWithoutSavedFilterDataInput, FilterPresetUncheckedCreateWithoutSavedFilterDataInput>
    connectOrCreate?: FilterPresetCreateOrConnectWithoutSavedFilterDataInput
    upsert?: FilterPresetUpsertWithoutSavedFilterDataInput
    connect?: FilterPresetWhereUniqueInput
    update?: XOR<XOR<FilterPresetUpdateToOneWithWhereWithoutSavedFilterDataInput, FilterPresetUpdateWithoutSavedFilterDataInput>, FilterPresetUncheckedUpdateWithoutSavedFilterDataInput>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SectionCreateWithoutCourseInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoSection?: VideoSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCourseInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoSection?: VideoSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCourseInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionCreateManyCourseInputEnvelope = {
    data: SectionCreateManyCourseInput | SectionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutCourseInput = {
    id?: string
    value: number
    userId: string
  }

  export type RatingUncheckedCreateWithoutCourseInput = {
    id?: string
    value: number
    userId: string
  }

  export type RatingCreateOrConnectWithoutCourseInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput>
  }

  export type RatingCreateManyCourseInputEnvelope = {
    data: RatingCreateManyCourseInput | RatingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EnrolledStudentsCreateWithoutCourseInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    courseProgress?: CourseProgressCreateNestedOneWithoutEnrolledStudentInput
  }

  export type EnrolledStudentsUncheckedCreateWithoutCourseInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    courseProgress?: CourseProgressUncheckedCreateNestedOneWithoutEnrolledStudentInput
  }

  export type EnrolledStudentsCreateOrConnectWithoutCourseInput = {
    where: EnrolledStudentsWhereUniqueInput
    create: XOR<EnrolledStudentsCreateWithoutCourseInput, EnrolledStudentsUncheckedCreateWithoutCourseInput>
  }

  export type EnrolledStudentsCreateManyCourseInputEnvelope = {
    data: EnrolledStudentsCreateManyCourseInput | EnrolledStudentsCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
  }

  export type SectionUpdateManyWithWhereWithoutCourseInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutCourseInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionName?: StringFilter<"Section"> | string
    courseId?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutCourseInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutCourseInput, RatingUncheckedUpdateWithoutCourseInput>
    create: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutCourseInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutCourseInput, RatingUncheckedUpdateWithoutCourseInput>
  }

  export type RatingUpdateManyWithWhereWithoutCourseInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutCourseInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    value?: IntFilter<"Rating"> | number
    courseId?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
  }

  export type EnrolledStudentsUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrolledStudentsWhereUniqueInput
    update: XOR<EnrolledStudentsUpdateWithoutCourseInput, EnrolledStudentsUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrolledStudentsCreateWithoutCourseInput, EnrolledStudentsUncheckedCreateWithoutCourseInput>
  }

  export type EnrolledStudentsUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrolledStudentsWhereUniqueInput
    data: XOR<EnrolledStudentsUpdateWithoutCourseInput, EnrolledStudentsUncheckedUpdateWithoutCourseInput>
  }

  export type EnrolledStudentsUpdateManyWithWhereWithoutCourseInput = {
    where: EnrolledStudentsScalarWhereInput
    data: XOR<EnrolledStudentsUpdateManyMutationInput, EnrolledStudentsUncheckedUpdateManyWithoutCourseInput>
  }

  export type EnrolledStudentsScalarWhereInput = {
    AND?: EnrolledStudentsScalarWhereInput | EnrolledStudentsScalarWhereInput[]
    OR?: EnrolledStudentsScalarWhereInput[]
    NOT?: EnrolledStudentsScalarWhereInput | EnrolledStudentsScalarWhereInput[]
    id?: StringFilter<"EnrolledStudents"> | string
    order_id?: StringFilter<"EnrolledStudents"> | string
    amount?: IntFilter<"EnrolledStudents"> | number
    currency?: StringFilter<"EnrolledStudents"> | string
    payment_status?: Enumpayment_statusFilter<"EnrolledStudents"> | $Enums.payment_status
    studentId?: StringFilter<"EnrolledStudents"> | string
    email?: StringFilter<"EnrolledStudents"> | string
    contact?: StringFilter<"EnrolledStudents"> | string
    invoice_name?: StringFilter<"EnrolledStudents"> | string
    created_at?: StringFilter<"EnrolledStudents"> | string
    courseId?: StringFilter<"EnrolledStudents"> | string
  }

  export type CourseCreateWithoutSectionInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: RatingCreateNestedManyWithoutCourseInput
    enrolledStudents?: EnrolledStudentsCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSectionInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
    enrolledStudents?: EnrolledStudentsUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSectionInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSectionInput, CourseUncheckedCreateWithoutSectionInput>
  }

  export type VideoSectionCreateWithoutSectionInput = {
    id?: string
    video_title: string
    video_url: string
    video_public_id: string
    video_thumbnailUrl: string
    video_duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSectionUncheckedCreateWithoutSectionInput = {
    id?: string
    video_title: string
    video_url: string
    video_public_id: string
    video_thumbnailUrl: string
    video_duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSectionCreateOrConnectWithoutSectionInput = {
    where: VideoSectionWhereUniqueInput
    create: XOR<VideoSectionCreateWithoutSectionInput, VideoSectionUncheckedCreateWithoutSectionInput>
  }

  export type VideoSectionCreateManySectionInputEnvelope = {
    data: VideoSectionCreateManySectionInput | VideoSectionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutSectionInput = {
    update: XOR<CourseUpdateWithoutSectionInput, CourseUncheckedUpdateWithoutSectionInput>
    create: XOR<CourseCreateWithoutSectionInput, CourseUncheckedCreateWithoutSectionInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSectionInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSectionInput, CourseUncheckedUpdateWithoutSectionInput>
  }

  export type CourseUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingUpdateManyWithoutCourseNestedInput
    enrolledStudents?: EnrolledStudentsUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
    enrolledStudents?: EnrolledStudentsUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type VideoSectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: VideoSectionWhereUniqueInput
    update: XOR<VideoSectionUpdateWithoutSectionInput, VideoSectionUncheckedUpdateWithoutSectionInput>
    create: XOR<VideoSectionCreateWithoutSectionInput, VideoSectionUncheckedCreateWithoutSectionInput>
  }

  export type VideoSectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: VideoSectionWhereUniqueInput
    data: XOR<VideoSectionUpdateWithoutSectionInput, VideoSectionUncheckedUpdateWithoutSectionInput>
  }

  export type VideoSectionUpdateManyWithWhereWithoutSectionInput = {
    where: VideoSectionScalarWhereInput
    data: XOR<VideoSectionUpdateManyMutationInput, VideoSectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type VideoSectionScalarWhereInput = {
    AND?: VideoSectionScalarWhereInput | VideoSectionScalarWhereInput[]
    OR?: VideoSectionScalarWhereInput[]
    NOT?: VideoSectionScalarWhereInput | VideoSectionScalarWhereInput[]
    id?: StringFilter<"VideoSection"> | string
    video_title?: StringFilter<"VideoSection"> | string
    video_url?: StringFilter<"VideoSection"> | string
    video_public_id?: StringFilter<"VideoSection"> | string
    video_thumbnailUrl?: StringFilter<"VideoSection"> | string
    video_duration?: FloatFilter<"VideoSection"> | number
    sectionId?: StringFilter<"VideoSection"> | string
    createdAt?: DateTimeFilter<"VideoSection"> | Date | string
    updatedAt?: DateTimeFilter<"VideoSection"> | Date | string
  }

  export type SectionCreateWithoutVideoSectionInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutVideoSectionInput = {
    id?: string
    sectionName: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionCreateOrConnectWithoutVideoSectionInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutVideoSectionInput, SectionUncheckedCreateWithoutVideoSectionInput>
  }

  export type SectionUpsertWithoutVideoSectionInput = {
    update: XOR<SectionUpdateWithoutVideoSectionInput, SectionUncheckedUpdateWithoutVideoSectionInput>
    create: XOR<SectionCreateWithoutVideoSectionInput, SectionUncheckedCreateWithoutVideoSectionInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutVideoSectionInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutVideoSectionInput, SectionUncheckedUpdateWithoutVideoSectionInput>
  }

  export type SectionUpdateWithoutVideoSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutVideoSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateWithoutRatingInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: SectionCreateNestedManyWithoutCourseInput
    enrolledStudents?: EnrolledStudentsCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRatingInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: SectionUncheckedCreateNestedManyWithoutCourseInput
    enrolledStudents?: EnrolledStudentsUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRatingInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
  }

  export type CourseUpsertWithoutRatingInput = {
    update: XOR<CourseUpdateWithoutRatingInput, CourseUncheckedUpdateWithoutRatingInput>
    create: XOR<CourseCreateWithoutRatingInput, CourseUncheckedCreateWithoutRatingInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRatingInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRatingInput, CourseUncheckedUpdateWithoutRatingInput>
  }

  export type CourseUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateManyWithoutCourseNestedInput
    enrolledStudents?: EnrolledStudentsUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    enrolledStudents?: EnrolledStudentsUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutEnrolledStudentsInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: SectionCreateNestedManyWithoutCourseInput
    rating?: RatingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrolledStudentsInput = {
    id?: string
    owner: string
    ownerName?: string | null
    title: string
    description: string
    price: number
    main_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: SectionUncheckedCreateNestedManyWithoutCourseInput
    rating?: RatingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrolledStudentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput>
  }

  export type CourseProgressCreateWithoutEnrolledStudentInput = {
    id?: string
    courseId: string
    studentId: string
    completionPercentage?: number
    isCompleted?: boolean
    sectionProgress?: SectionProgressCreateNestedManyWithoutCourseProgressInput
  }

  export type CourseProgressUncheckedCreateWithoutEnrolledStudentInput = {
    id?: string
    courseId: string
    studentId: string
    completionPercentage?: number
    isCompleted?: boolean
    sectionProgress?: SectionProgressUncheckedCreateNestedManyWithoutCourseProgressInput
  }

  export type CourseProgressCreateOrConnectWithoutEnrolledStudentInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutEnrolledStudentInput, CourseProgressUncheckedCreateWithoutEnrolledStudentInput>
  }

  export type CourseUpsertWithoutEnrolledStudentsInput = {
    update: XOR<CourseUpdateWithoutEnrolledStudentsInput, CourseUncheckedUpdateWithoutEnrolledStudentsInput>
    create: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrolledStudentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrolledStudentsInput, CourseUncheckedUpdateWithoutEnrolledStudentsInput>
  }

  export type CourseUpdateWithoutEnrolledStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateManyWithoutCourseNestedInput
    rating?: RatingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrolledStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    main_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    rating?: RatingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseProgressUpsertWithoutEnrolledStudentInput = {
    update: XOR<CourseProgressUpdateWithoutEnrolledStudentInput, CourseProgressUncheckedUpdateWithoutEnrolledStudentInput>
    create: XOR<CourseProgressCreateWithoutEnrolledStudentInput, CourseProgressUncheckedCreateWithoutEnrolledStudentInput>
    where?: CourseProgressWhereInput
  }

  export type CourseProgressUpdateToOneWithWhereWithoutEnrolledStudentInput = {
    where?: CourseProgressWhereInput
    data: XOR<CourseProgressUpdateWithoutEnrolledStudentInput, CourseProgressUncheckedUpdateWithoutEnrolledStudentInput>
  }

  export type CourseProgressUpdateWithoutEnrolledStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    sectionProgress?: SectionProgressUpdateManyWithoutCourseProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutEnrolledStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    sectionProgress?: SectionProgressUncheckedUpdateManyWithoutCourseProgressNestedInput
  }

  export type EnrolledStudentsCreateWithoutCourseProgressInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    course: CourseCreateNestedOneWithoutEnrolledStudentsInput
  }

  export type EnrolledStudentsUncheckedCreateWithoutCourseProgressInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
    courseId: string
  }

  export type EnrolledStudentsCreateOrConnectWithoutCourseProgressInput = {
    where: EnrolledStudentsWhereUniqueInput
    create: XOR<EnrolledStudentsCreateWithoutCourseProgressInput, EnrolledStudentsUncheckedCreateWithoutCourseProgressInput>
  }

  export type SectionProgressCreateWithoutCourseProgressInput = {
    id?: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
    videoProgress?: VideoProgressCreateNestedManyWithoutSectionProgressInput
  }

  export type SectionProgressUncheckedCreateWithoutCourseProgressInput = {
    id?: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
    videoProgress?: VideoProgressUncheckedCreateNestedManyWithoutSectionProgressInput
  }

  export type SectionProgressCreateOrConnectWithoutCourseProgressInput = {
    where: SectionProgressWhereUniqueInput
    create: XOR<SectionProgressCreateWithoutCourseProgressInput, SectionProgressUncheckedCreateWithoutCourseProgressInput>
  }

  export type SectionProgressCreateManyCourseProgressInputEnvelope = {
    data: SectionProgressCreateManyCourseProgressInput | SectionProgressCreateManyCourseProgressInput[]
    skipDuplicates?: boolean
  }

  export type EnrolledStudentsUpsertWithoutCourseProgressInput = {
    update: XOR<EnrolledStudentsUpdateWithoutCourseProgressInput, EnrolledStudentsUncheckedUpdateWithoutCourseProgressInput>
    create: XOR<EnrolledStudentsCreateWithoutCourseProgressInput, EnrolledStudentsUncheckedCreateWithoutCourseProgressInput>
    where?: EnrolledStudentsWhereInput
  }

  export type EnrolledStudentsUpdateToOneWithWhereWithoutCourseProgressInput = {
    where?: EnrolledStudentsWhereInput
    data: XOR<EnrolledStudentsUpdateWithoutCourseProgressInput, EnrolledStudentsUncheckedUpdateWithoutCourseProgressInput>
  }

  export type EnrolledStudentsUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutEnrolledStudentsNestedInput
  }

  export type EnrolledStudentsUncheckedUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionProgressUpsertWithWhereUniqueWithoutCourseProgressInput = {
    where: SectionProgressWhereUniqueInput
    update: XOR<SectionProgressUpdateWithoutCourseProgressInput, SectionProgressUncheckedUpdateWithoutCourseProgressInput>
    create: XOR<SectionProgressCreateWithoutCourseProgressInput, SectionProgressUncheckedCreateWithoutCourseProgressInput>
  }

  export type SectionProgressUpdateWithWhereUniqueWithoutCourseProgressInput = {
    where: SectionProgressWhereUniqueInput
    data: XOR<SectionProgressUpdateWithoutCourseProgressInput, SectionProgressUncheckedUpdateWithoutCourseProgressInput>
  }

  export type SectionProgressUpdateManyWithWhereWithoutCourseProgressInput = {
    where: SectionProgressScalarWhereInput
    data: XOR<SectionProgressUpdateManyMutationInput, SectionProgressUncheckedUpdateManyWithoutCourseProgressInput>
  }

  export type SectionProgressScalarWhereInput = {
    AND?: SectionProgressScalarWhereInput | SectionProgressScalarWhereInput[]
    OR?: SectionProgressScalarWhereInput[]
    NOT?: SectionProgressScalarWhereInput | SectionProgressScalarWhereInput[]
    id?: StringFilter<"SectionProgress"> | string
    courseProgressId?: StringFilter<"SectionProgress"> | string
    sectionId?: StringFilter<"SectionProgress"> | string
    completionPercentage?: FloatFilter<"SectionProgress"> | number
    isCompleted?: BoolFilter<"SectionProgress"> | boolean
  }

  export type CourseProgressCreateWithoutSectionProgressInput = {
    id?: string
    courseId: string
    studentId: string
    completionPercentage?: number
    isCompleted?: boolean
    enrolledStudent: EnrolledStudentsCreateNestedOneWithoutCourseProgressInput
  }

  export type CourseProgressUncheckedCreateWithoutSectionProgressInput = {
    id?: string
    enrolledStudentId: string
    courseId: string
    studentId: string
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type CourseProgressCreateOrConnectWithoutSectionProgressInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutSectionProgressInput, CourseProgressUncheckedCreateWithoutSectionProgressInput>
  }

  export type VideoProgressCreateWithoutSectionProgressInput = {
    id?: string
    videoSectionId: string
    video_duration: number
    userId: string
    watchedSeconds?: number
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type VideoProgressUncheckedCreateWithoutSectionProgressInput = {
    id?: string
    videoSectionId: string
    video_duration: number
    userId: string
    watchedSeconds?: number
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type VideoProgressCreateOrConnectWithoutSectionProgressInput = {
    where: VideoProgressWhereUniqueInput
    create: XOR<VideoProgressCreateWithoutSectionProgressInput, VideoProgressUncheckedCreateWithoutSectionProgressInput>
  }

  export type VideoProgressCreateManySectionProgressInputEnvelope = {
    data: VideoProgressCreateManySectionProgressInput | VideoProgressCreateManySectionProgressInput[]
    skipDuplicates?: boolean
  }

  export type CourseProgressUpsertWithoutSectionProgressInput = {
    update: XOR<CourseProgressUpdateWithoutSectionProgressInput, CourseProgressUncheckedUpdateWithoutSectionProgressInput>
    create: XOR<CourseProgressCreateWithoutSectionProgressInput, CourseProgressUncheckedCreateWithoutSectionProgressInput>
    where?: CourseProgressWhereInput
  }

  export type CourseProgressUpdateToOneWithWhereWithoutSectionProgressInput = {
    where?: CourseProgressWhereInput
    data: XOR<CourseProgressUpdateWithoutSectionProgressInput, CourseProgressUncheckedUpdateWithoutSectionProgressInput>
  }

  export type CourseProgressUpdateWithoutSectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    enrolledStudent?: EnrolledStudentsUpdateOneRequiredWithoutCourseProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutSectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledStudentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressUpsertWithWhereUniqueWithoutSectionProgressInput = {
    where: VideoProgressWhereUniqueInput
    update: XOR<VideoProgressUpdateWithoutSectionProgressInput, VideoProgressUncheckedUpdateWithoutSectionProgressInput>
    create: XOR<VideoProgressCreateWithoutSectionProgressInput, VideoProgressUncheckedCreateWithoutSectionProgressInput>
  }

  export type VideoProgressUpdateWithWhereUniqueWithoutSectionProgressInput = {
    where: VideoProgressWhereUniqueInput
    data: XOR<VideoProgressUpdateWithoutSectionProgressInput, VideoProgressUncheckedUpdateWithoutSectionProgressInput>
  }

  export type VideoProgressUpdateManyWithWhereWithoutSectionProgressInput = {
    where: VideoProgressScalarWhereInput
    data: XOR<VideoProgressUpdateManyMutationInput, VideoProgressUncheckedUpdateManyWithoutSectionProgressInput>
  }

  export type VideoProgressScalarWhereInput = {
    AND?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
    OR?: VideoProgressScalarWhereInput[]
    NOT?: VideoProgressScalarWhereInput | VideoProgressScalarWhereInput[]
    id?: StringFilter<"VideoProgress"> | string
    sectionProgressId?: StringFilter<"VideoProgress"> | string
    videoSectionId?: StringFilter<"VideoProgress"> | string
    video_duration?: FloatFilter<"VideoProgress"> | number
    userId?: StringFilter<"VideoProgress"> | string
    watchedSeconds?: FloatFilter<"VideoProgress"> | number
    completionPercentage?: FloatFilter<"VideoProgress"> | number
    isCompleted?: BoolFilter<"VideoProgress"> | boolean
  }

  export type SectionProgressCreateWithoutVideoProgressInput = {
    id?: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
    courseProgress: CourseProgressCreateNestedOneWithoutSectionProgressInput
  }

  export type SectionProgressUncheckedCreateWithoutVideoProgressInput = {
    id?: string
    courseProgressId: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type SectionProgressCreateOrConnectWithoutVideoProgressInput = {
    where: SectionProgressWhereUniqueInput
    create: XOR<SectionProgressCreateWithoutVideoProgressInput, SectionProgressUncheckedCreateWithoutVideoProgressInput>
  }

  export type SectionProgressUpsertWithoutVideoProgressInput = {
    update: XOR<SectionProgressUpdateWithoutVideoProgressInput, SectionProgressUncheckedUpdateWithoutVideoProgressInput>
    create: XOR<SectionProgressCreateWithoutVideoProgressInput, SectionProgressUncheckedCreateWithoutVideoProgressInput>
    where?: SectionProgressWhereInput
  }

  export type SectionProgressUpdateToOneWithWhereWithoutVideoProgressInput = {
    where?: SectionProgressWhereInput
    data: XOR<SectionProgressUpdateWithoutVideoProgressInput, SectionProgressUncheckedUpdateWithoutVideoProgressInput>
  }

  export type SectionProgressUpdateWithoutVideoProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    courseProgress?: CourseProgressUpdateOneRequiredWithoutSectionProgressNestedInput
  }

  export type SectionProgressUncheckedUpdateWithoutVideoProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseProgressId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SavedFilterDataCreateWithoutFilterPresetInput = {
    id?: string
    name: string
    selectedRating?: SavedFilterDataCreateselectedRatingInput | string[]
    priceRange?: SavedFilterDataCreatepriceRangeInput | number[]
  }

  export type SavedFilterDataUncheckedCreateWithoutFilterPresetInput = {
    id?: string
    name: string
    selectedRating?: SavedFilterDataCreateselectedRatingInput | string[]
    priceRange?: SavedFilterDataCreatepriceRangeInput | number[]
  }

  export type SavedFilterDataCreateOrConnectWithoutFilterPresetInput = {
    where: SavedFilterDataWhereUniqueInput
    create: XOR<SavedFilterDataCreateWithoutFilterPresetInput, SavedFilterDataUncheckedCreateWithoutFilterPresetInput>
  }

  export type SavedFilterDataCreateManyFilterPresetInputEnvelope = {
    data: SavedFilterDataCreateManyFilterPresetInput | SavedFilterDataCreateManyFilterPresetInput[]
    skipDuplicates?: boolean
  }

  export type SavedFilterDataUpsertWithWhereUniqueWithoutFilterPresetInput = {
    where: SavedFilterDataWhereUniqueInput
    update: XOR<SavedFilterDataUpdateWithoutFilterPresetInput, SavedFilterDataUncheckedUpdateWithoutFilterPresetInput>
    create: XOR<SavedFilterDataCreateWithoutFilterPresetInput, SavedFilterDataUncheckedCreateWithoutFilterPresetInput>
  }

  export type SavedFilterDataUpdateWithWhereUniqueWithoutFilterPresetInput = {
    where: SavedFilterDataWhereUniqueInput
    data: XOR<SavedFilterDataUpdateWithoutFilterPresetInput, SavedFilterDataUncheckedUpdateWithoutFilterPresetInput>
  }

  export type SavedFilterDataUpdateManyWithWhereWithoutFilterPresetInput = {
    where: SavedFilterDataScalarWhereInput
    data: XOR<SavedFilterDataUpdateManyMutationInput, SavedFilterDataUncheckedUpdateManyWithoutFilterPresetInput>
  }

  export type SavedFilterDataScalarWhereInput = {
    AND?: SavedFilterDataScalarWhereInput | SavedFilterDataScalarWhereInput[]
    OR?: SavedFilterDataScalarWhereInput[]
    NOT?: SavedFilterDataScalarWhereInput | SavedFilterDataScalarWhereInput[]
    id?: StringFilter<"SavedFilterData"> | string
    name?: StringFilter<"SavedFilterData"> | string
    selectedRating?: StringNullableListFilter<"SavedFilterData">
    priceRange?: IntNullableListFilter<"SavedFilterData">
    FilterPresetId?: StringFilter<"SavedFilterData"> | string
  }

  export type FilterPresetCreateWithoutSavedFilterDataInput = {
    id?: string
    userId: string
  }

  export type FilterPresetUncheckedCreateWithoutSavedFilterDataInput = {
    id?: string
    userId: string
  }

  export type FilterPresetCreateOrConnectWithoutSavedFilterDataInput = {
    where: FilterPresetWhereUniqueInput
    create: XOR<FilterPresetCreateWithoutSavedFilterDataInput, FilterPresetUncheckedCreateWithoutSavedFilterDataInput>
  }

  export type FilterPresetUpsertWithoutSavedFilterDataInput = {
    update: XOR<FilterPresetUpdateWithoutSavedFilterDataInput, FilterPresetUncheckedUpdateWithoutSavedFilterDataInput>
    create: XOR<FilterPresetCreateWithoutSavedFilterDataInput, FilterPresetUncheckedCreateWithoutSavedFilterDataInput>
    where?: FilterPresetWhereInput
  }

  export type FilterPresetUpdateToOneWithWhereWithoutSavedFilterDataInput = {
    where?: FilterPresetWhereInput
    data: XOR<FilterPresetUpdateWithoutSavedFilterDataInput, FilterPresetUncheckedUpdateWithoutSavedFilterDataInput>
  }

  export type FilterPresetUpdateWithoutSavedFilterDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterPresetUncheckedUpdateWithoutSavedFilterDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateManyCourseInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateManyCourseInput = {
    id?: string
    value: number
    userId: string
  }

  export type EnrolledStudentsCreateManyCourseInput = {
    id?: string
    order_id: string
    amount: number
    currency: string
    payment_status: $Enums.payment_status
    studentId: string
    email: string
    contact: string
    invoice_name: string
    created_at: string
  }

  export type SectionUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoSection?: VideoSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoSection?: VideoSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledStudentsUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
    courseProgress?: CourseProgressUpdateOneWithoutEnrolledStudentNestedInput
  }

  export type EnrolledStudentsUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
    courseProgress?: CourseProgressUncheckedUpdateOneWithoutEnrolledStudentNestedInput
  }

  export type EnrolledStudentsUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    invoice_name?: StringFieldUpdateOperationsInput | string
    created_at?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSectionCreateManySectionInput = {
    id?: string
    video_title: string
    video_url: string
    video_public_id: string
    video_thumbnailUrl: string
    video_duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    video_public_id?: StringFieldUpdateOperationsInput | string
    video_thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    video_public_id?: StringFieldUpdateOperationsInput | string
    video_thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSectionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    video_public_id?: StringFieldUpdateOperationsInput | string
    video_thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionProgressCreateManyCourseProgressInput = {
    id?: string
    sectionId: string
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type SectionProgressUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    videoProgress?: VideoProgressUpdateManyWithoutSectionProgressNestedInput
  }

  export type SectionProgressUncheckedUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    videoProgress?: VideoProgressUncheckedUpdateManyWithoutSectionProgressNestedInput
  }

  export type SectionProgressUncheckedUpdateManyWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressCreateManySectionProgressInput = {
    id?: string
    videoSectionId: string
    video_duration: number
    userId: string
    watchedSeconds?: number
    completionPercentage?: number
    isCompleted?: boolean
  }

  export type VideoProgressUpdateWithoutSectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoSectionId?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedSeconds?: FloatFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressUncheckedUpdateWithoutSectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoSectionId?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedSeconds?: FloatFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoProgressUncheckedUpdateManyWithoutSectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoSectionId?: StringFieldUpdateOperationsInput | string
    video_duration?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedSeconds?: FloatFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SavedFilterDataCreateManyFilterPresetInput = {
    id?: string
    name: string
    selectedRating?: SavedFilterDataCreateselectedRatingInput | string[]
    priceRange?: SavedFilterDataCreatepriceRangeInput | number[]
  }

  export type SavedFilterDataUpdateWithoutFilterPresetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selectedRating?: SavedFilterDataUpdateselectedRatingInput | string[]
    priceRange?: SavedFilterDataUpdatepriceRangeInput | number[]
  }

  export type SavedFilterDataUncheckedUpdateWithoutFilterPresetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selectedRating?: SavedFilterDataUpdateselectedRatingInput | string[]
    priceRange?: SavedFilterDataUpdatepriceRangeInput | number[]
  }

  export type SavedFilterDataUncheckedUpdateManyWithoutFilterPresetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selectedRating?: SavedFilterDataUpdateselectedRatingInput | string[]
    priceRange?: SavedFilterDataUpdatepriceRangeInput | number[]
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