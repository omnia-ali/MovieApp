export class pager {
  currentPage: number;

  endIndex: number;
  endPage: number;
  startIndex: number;

  pageSize: number = 5;
  totalItems: number;
  totalPages: number;

  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

}

export class PaginatedResult<T> {
  page: number;
  results: T;
  total_pages: number
  total_results: number;
  // pager: pager;
  /**
   *
   */
}

