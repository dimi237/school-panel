<?php

namespace App\Http\Controllers\Global;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Carbon;

class CustomerController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function list(Request $request): Response
    {
        try {
            return Inertia::render('global/Customers/List', [
                'user' => $request->user(),
                'pageTitle' => 'Member List',
                'pageDescription' => 'A list of all the students in the system.',
                'setBadgeUrl' => route('dashboard.global.customers.setBadge'),
                'setCertUrl' => route('dashboard.global.customers.setCert')
            ]);
        } catch (Exception $exception) {
            dd($exception);
        }
    }
    /**
     * Customer Create Form
     */
    public function create(Request $request): Response
    {
        try {
            return Inertia::render('global/Customers/Form', [
                'user' => $request->user(),
                'pageTitle' => 'Create Member',
                'pageDescription' => '',
                'pageData' => null,
                'specialitiesList' => ['Infirmier / Nurse', 'Sage-femme / Midwife', 'Technicien médico-sanitaire / Health Technician'],
                'formUrl' => route('dashboard.global.customers.storeUpdate')
            ]);
        } catch (Exception $exception) {
            dd($exception);
        }
    }

    /**
     * Customer Create Form
     */
    public function edit($userId, Request $request): Response
    {
        try {
            $getCustomerInfo = Customer::where('id', $userId)->first();
            return Inertia::render('global/Customers/Form', [
                'user' => $request->user(),
                'pageTitle' => 'Edit Member',
                'pageDescription' => '',
                'pageData' => $getCustomerInfo,
                'specialitiesList' => ['Infirmier / Nurse', 'Sage-femme / Midwife', 'Technicien médico-sanitaire / Health Technician'],
                'formUrl' => route('dashboard.global.customers.storeUpdate', $userId)
            ]);
        } catch (Exception $exception) {
            dd($exception);
        }
    }
    /**
     * Handle an customers form.
     *
     * @throws ValidationException
     */
    public function storeUpdate(Request $request, $userId = 0): RedirectResponse
    {

        $customer = Customer::updateOrCreate([
            'id' => $userId,
        ], [
            'name' => $request->name,
            'birthdate' => $request->birthdate,
            'birthplace' => $request->birthplace,
            'certificate' => $request->certificate,
            'certifdate' => $request->certifdate,
            'role' => $request->role,
            'code' => $request->code,
            'expiration' => $request->expiration,
            'speciality' => $request->speciality,
            'certificate_id' => $request->certificate_id || '',
            'badge_id' => $request->badge_id || '',
        ]);
        return redirect()->route('dashboard.global.customers.list');
    }
    /**
     * Remove Customer
     * */
    public function remove($user_id)
    {
        Customer::where('id', $user_id)->delete();
        return redirect()->route('dashboard.global.customers.list');
    }

    public function setCert($user_id)
    {
        Customer::where('id', $user_id)->update([
            'certificate_id' => 'true',
            'certificate_date' => Carbon::now(),
        ]);
        ;
        return redirect()->route('dashboard.global.customers.list');
    }
    public function setBadge($user_id)
    {
        Customer::where('id', $user_id)->update([
            'badge_id' => 'true',
            'badge_date' => Carbon::now(),

        ]);
        ;
        return redirect()->route('dashboard.global.customers.list');
    }
  
}
