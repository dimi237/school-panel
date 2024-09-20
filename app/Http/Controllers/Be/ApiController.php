<?php

namespace App\Http\Controllers\Be;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Http\Resources\BookReviewResource;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\CustomerResource;
use App\Models\Book;
use App\Models\BookReview;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Carbon;

class ApiController extends Controller
{

    /**
     * Display the user's list.
     */
    public function users(Request $request): AnonymousResourceCollection
    {
        $sortFields = ['id', 'name', 'address', 'email', 'created_at', 'updated_at'];
        $PER_PAGE = 10;
        $DEFAULT_SORT_FIELD = 'created_at';
        $DEFAULT_SORT_ORDER = 'asc';
        $sortFieldInput = $request->input('sort_field', $DEFAULT_SORT_FIELD);
        $sortField = in_array($sortFieldInput, $sortFields) ? $sortFieldInput : $DEFAULT_SORT_ORDER;
        $sortOrder = $request->input('sort_order', $DEFAULT_SORT_ORDER);
        $searchInput = $request->input('search');
        $query = User::with(['roles'])->orderBy($sortField, $sortOrder);
        $perPage = $request->input('per_page') ?? $PER_PAGE;
        if (!is_null($searchInput)) {
            $searchQuery = "%$searchInput%";
            $query = $query->where('name', 'like', $searchQuery)
                ->orWhere('email', 'like', $searchQuery)
                ->orWhereHas('roles', function ($query) use ($searchQuery) {
                    $query->where('name', $searchQuery);
                });
        }
        return UserResource::collection($query->paginate((int) $perPage));
    }

    /**
     * Display the customer's list.
     */
    public function customers(Request $request): AnonymousResourceCollection
    {
        $sortFields = ['id', 'name', 'created_at', 'updated_at'];
        $PER_PAGE = 10;
        $DEFAULT_SORT_FIELD = 'created_at';
        $DEFAULT_SORT_ORDER = 'asc';
        $sortFieldInput = $request->input('sort_field', $DEFAULT_SORT_FIELD);
        $sortField = in_array($sortFieldInput, $sortFields) ? $sortFieldInput : $DEFAULT_SORT_FIELD;
        $sortOrder = $request->input('sort_order', $DEFAULT_SORT_ORDER);
        $searchInput = $request->input('search');
        $query = Customer::orderBy($sortField, $sortOrder);
        $perPage = $request->input('per_page') ?? $PER_PAGE;
        if (!is_null($searchInput)) {
            $searchQuery = "%$searchInput%";
            $query = $query->where('name', 'like', $searchQuery);
        }
        return CustomerResource::collection($query->paginate((int) $perPage));
    }


    /**
     * Display the permissions list.
     */
    public function permissions(Request $request): AnonymousResourceCollection
    {
        $sortFields = ['id', 'name', 'slug', 'description', 'is_active', 'guard_name', 'created_at', 'updated_at'];
        $PER_PAGE = 10;
        $DEFAULT_SORT_FIELD = 'created_at';
        $DEFAULT_SORT_ORDER = 'asc';
        $sortFieldInput = $request->input('sort_field', $DEFAULT_SORT_FIELD);
        $sortField = in_array($sortFieldInput, $sortFields) ? $sortFieldInput : $DEFAULT_SORT_ORDER;
        $sortOrder = $request->input('sort_order', $DEFAULT_SORT_ORDER);
        $searchInput = $request->input('search');
        $query = Permission::orderBy($sortField, $sortOrder);
        $perPage = $request->input('per_page') ?? $PER_PAGE;
        if (!is_null($searchInput)) {
            $searchQuery = "%$searchInput%";
            $query = $query->where('name', 'like', $searchQuery)
                ->orWhere('slug', 'like', $searchQuery)
                ->orWhere('description', 'like', $searchQuery)
                ->orWhere('guard_name', 'like', $searchQuery)
                ->orWhere('is_active', 'like', $searchQuery);
        }
        return PermissionResource::collection($query->paginate((int) $perPage));
    }
    /**
     * Display the roles list.
     */
    public function roles(Request $request): AnonymousResourceCollection
    {
        $sortFields = ['id', 'name', 'slug', 'description', 'is_active', 'guard_name', 'user_type', 'record_access', 'created_at', 'updated_at'];
        $PER_PAGE = 10;
        $DEFAULT_SORT_FIELD = 'created_at';
        $DEFAULT_SORT_ORDER = 'asc';
        $sortFieldInput = $request->input('sort_field', $DEFAULT_SORT_FIELD);
        $sortField = in_array($sortFieldInput, $sortFields) ? $sortFieldInput : $DEFAULT_SORT_ORDER;
        $sortOrder = $request->input('sort_order', $DEFAULT_SORT_ORDER);
        $searchInput = $request->input('search');
        $query = Role::orderBy($sortField, $sortOrder);
        $perPage = $request->input('per_page') ?? $PER_PAGE;
        if (!is_null($searchInput)) {
            $searchQuery = "%$searchInput%";
            $query = $query->where('name', 'like', $searchQuery)
                ->orWhere('slug', 'like', $searchQuery)
                ->orWhere('description', 'like', $searchQuery)
                ->orWhere('guard_name', 'like', $searchQuery)
                ->orWhere('is_active', 'like', $searchQuery);
        }
        return RoleResource::collection($query->paginate((int) $perPage));
    }
    /**
     * Display the books list.
     */
    public function books(Request $request): AnonymousResourceCollection
    {
        $sortFields = ['id', 'title', 'slug', 'ISBN_10', 'ISBN_13', 'author', 'created_by', 'created_at', 'updated_at'];
        $PER_PAGE = 10;
        $DEFAULT_SORT_FIELD = 'created_at';
        $DEFAULT_SORT_ORDER = 'desc';
        $sortFieldInput = $request->input('sort_field', $DEFAULT_SORT_FIELD);
        $sortField = in_array($sortFieldInput, $sortFields) ? $sortFieldInput : $DEFAULT_SORT_ORDER;
        $sortOrder = $request->input('sort_order', $DEFAULT_SORT_ORDER);
        $searchInput = $request->input('search');
        $query = Book::orderBy($sortField, $sortOrder);
        $perPage = $request->input('per_page') ?? $PER_PAGE;
        if (!is_null($searchInput)) {
            $searchQuery = "%$searchInput%";
            $query = $query->where('title', 'like', $searchQuery)
                ->orWhere('slug', 'like', $searchQuery)
                ->orWhere('ISBN_10', 'like', $searchQuery)
                ->orWhere('ISBN_13', 'like', $searchQuery)
                ->orWhere('author', 'like', $searchQuery);
        }
        return BookResource::collection($query->paginate((int) $perPage));
    }
    /**
     * Display the book reviews list.
     */
    public function bookReviews(Request $request): AnonymousResourceCollection
    {
        $sortFields = ['id', 'content', 'rating', 'status', 'book_id', 'created_by', 'created_at', 'updated_at'];
        $PER_PAGE = 10;
        $DEFAULT_SORT_FIELD = 'created_at';
        $DEFAULT_SORT_ORDER = 'desc';
        $sortFieldInput = $request->input('sort_field', $DEFAULT_SORT_FIELD);
        $sortField = in_array($sortFieldInput, $sortFields) ? $sortFieldInput : $DEFAULT_SORT_ORDER;
        $sortOrder = $request->input('sort_order', $DEFAULT_SORT_ORDER);
        $searchInput = $request->input('search');
        $query = BookReview::orderBy($sortField, $sortOrder);
        $perPage = $request->input('per_page') ?? $PER_PAGE;
        if (!is_null($searchInput)) {
            $searchQuery = "%$searchInput%";
            $query = $query->where('title', 'like', $searchQuery)
                ->orWhere('slug', 'like', $searchQuery)
                ->orWhere('ISBN_10', 'like', $searchQuery)
                ->orWhere('ISBN_13', 'like', $searchQuery)
                ->orWhere('author', 'like', $searchQuery);
        }
        return BookReviewResource::collection($query->paginate((int) $perPage));
    }

    public function count(Request $request): int
    {
        $att = $request->route('att');
        $query = Customer::whereNull('deleted_at');

        if ($att != '') {
            $query = Customer::where($att, 'true');
        }
        $list = $query->get();
        return $list->count();
    }

    public function certifChart(Request $request)
    {
        $type = $request->input('type', 'month');

        if ($type == 'month') {
            $startDate = $request->input('start_date', date('Y-01-01'));
            $months = collect(range(0, 11))->map(function ($item) {
                return Carbon::createFromFormat('m', $item)->format('F');
            });

            $data = Customer::selectRaw("MONTH(certificate_date) as month, COUNT(*) as count")
                ->whereYear('certificate_date', date('Y'))
                ->whereDate('certificate_date', '>=', $startDate)
                ->groupBy('month')
                ->pluck('count', 'month');

            $certifCounts = $months->map(function ($month, $index) use ($data) {
                $monthNumber = Carbon::parse($month)->month;
                return $data->get($index, 0);
            });

            $labels = $months->toArray();
            $certifCounts = $certifCounts->toArray();

            return response()->json([
                'labels' => $labels,
                'data' => $certifCounts,
            ]);

        }


        if ($type == 'day') {
            $startDate = $request->input('start_date', Carbon::now()->startOfMonth()->format('Y-m-d'));
            $endDate = $request->input('end_date', Carbon::now()->endOfMonth()->format('Y-m-d'));

            $days = collect(range(0, Carbon::parse($endDate)->diffInDays(Carbon::parse($startDate))))->map(function ($item) use ($startDate) {
                return Carbon::parse($startDate)->addDays($item)->format('d');
            });

            $data = Customer::selectRaw("DAY(certificate_date) as day, COUNT(*) as count")
                ->whereBetween('certificate_date', [$startDate, $endDate])
                ->groupBy('day')
                ->pluck('count', 'day');

            $certifCounts = $days->map(function ($day, $index) use ($data) {
                return $data->get($day, 0);
            });

            $labels = $days->toArray();
            $certifCounts = $certifCounts->toArray();

            return response()->json([
                'labels' => $labels,
                'data' => $certifCounts,
            ]);
        }

        if ($type == 'year') {
            $endDate = $request->input('end_date', Carbon::now()->format('Y-m-d'));

            $startDate = Carbon::parse($endDate)->subYears(10)->format('Y-m-d');

            $years = collect(range(Carbon::parse($startDate)->year, Carbon::parse($endDate)->year))->map(function ($year) {
                return (string) $year;
            });

            $data = Customer::selectRaw("YEAR(certificate_date) as year, COUNT(*) as count")
                ->whereBetween('certificate_date', [$startDate, $endDate])
                ->groupBy('year')
                ->pluck('count', 'year');

            $certifCounts = $years->map(function ($year, $index) use ($data) {
                return $data->get($year, 0);
            });

            $labels = $years->toArray();
            $certifCounts = $certifCounts->toArray();

            return response()->json([
                'labels' => $labels,
                'data' => $certifCounts,
            ]);
        }
    }


    public function badgeChart(Request $request)
    {
        $type = $request->input('type', 'month');

        if ($type == 'month') {
            $startDate = $request->input('start_date', date('Y-01-01'));
            $months = collect(range(0, 11))->map(function ($item) {
                return Carbon::createFromFormat('m', $item)->format('F');
            });

            $data = Customer::selectRaw("MONTH(badge_date) as month, COUNT(*) as count")
                ->whereYear('badge_date', date('Y'))
                ->whereDate('badge_date', '>=', $startDate)
                ->groupBy('month')
                ->pluck('count', 'month');

            $certifCounts = $months->map(function ($month, $index) use ($data) {
                $monthNumber = Carbon::parse($month)->month;
                return $data->get($index, 0);
            });

            $labels = $months->toArray();
            $certifCounts = $certifCounts->toArray();

            return response()->json([
                'labels' => $labels,
                'data' => $certifCounts,
            ]);

        }


        if ($type == 'day') {
            $startDate = $request->input('start_date', Carbon::now()->startOfMonth()->format('Y-m-d'));
            $endDate = $request->input('end_date', Carbon::now()->endOfMonth()->format('Y-m-d'));

            $days = collect(range(0, Carbon::parse($endDate)->diffInDays(Carbon::parse($startDate))))->map(function ($item) use ($startDate) {
                return Carbon::parse($startDate)->addDays($item)->format('d');
            });

            $data = Customer::selectRaw("DAY(badge_date) as day, COUNT(*) as count")
                ->whereBetween('badge_date', [$startDate, $endDate])
                ->groupBy('day')
                ->pluck('count', 'day');

            $certifCounts = $days->map(function ($day, $index) use ($data) {
                return $data->get($day, 0);
            });

            $labels = $days->toArray();
            $certifCounts = $certifCounts->toArray();

            return response()->json([
                'labels' => $labels,
                'data' => $certifCounts,
            ]);
        }

        if ($type == 'year') {
            $endDate = $request->input('end_date', Carbon::now()->format('Y-m-d'));

            $startDate = Carbon::parse($endDate)->subYears(10)->format('Y-m-d');

            $years = collect(range(Carbon::parse($startDate)->year, Carbon::parse($endDate)->year))->map(function ($year) {
                return (string) $year;
            });

            $data = Customer::selectRaw("YEAR(badge_date) as year, COUNT(*) as count")
                ->whereBetween('badge_date', [$startDate, $endDate])
                ->groupBy('year')
                ->pluck('count', 'year');

            $certifCounts = $years->map(function ($year, $index) use ($data) {
                return $data->get($year, 0);
            });

            $labels = $years->toArray();
            $certifCounts = $certifCounts->toArray();

            return response()->json([
                'labels' => $labels,
                'data' => $certifCounts,
            ]);
        }
    }

}
