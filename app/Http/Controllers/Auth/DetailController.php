<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Customer;
use Inertia\Response;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    /**
     * Display the registration view.
     */
    public function details(Request $request): Response
    {
        $customer = Customer::where('id', $request->route('id'))->first();

        return Inertia::render('public/detail', [
            'customer' => $customer,
        ]);
    }


}
